const path = require("path")

exports.createPages = async function createPages({
  actions: { createPage },
  graphql,
  reporter,
}) {
  /** Create career pages from netlify data */
  const { data, errors } = await graphql(`
    query CreateAritclePagesQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/modules/data/article/.+[.]md/" }
        }
        sort: { fields: frontmatter___created, order: DESC }
      ) {
        nodes {
          excerptAst
          frontmatter {
            created
            title
            updated
          }
          htmlAst
          id
          fileAbsolutePath
        }
      }
    }
  `)

  if (errors) {
    console.warn(errors)
    reporter.panicOnBuild(`Error running CreateAritclePagesQuery`)
    return
  }

  data.allMarkdownRemark.nodes.forEach(({ excerptAst, ...article }) => {
    createPage({
      path: `/articles/${path.basename(article.fileAbsolutePath, ".md")}`,
      component: path.resolve("./src/templates/Article/index.js"),
      context: {
        article: {
          ...article,
          path: `/articles/${path.basename(article.fileAbsolutePath, ".md")}`,
        },
      },
    })
  })

  createPage({
    path: "/articles",
    component: path.resolve("./src/templates/Articles/index.js"),
    context: {
      articlesList: data.allMarkdownRemark.nodes
        .slice(0, 10)
        .map(({ htmlAst, ...article }) => ({
          ...article,
          path: `/articles/${path.basename(article.fileAbsolutePath, ".md")}`,
        })),
    },
  })
}

exports.onCreateWebpackConfig = function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
