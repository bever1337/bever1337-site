import { graphql, Link } from "gatsby"
import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"

function Articles({
  data: {
    articlesMarkdown: {
      nodes: [{ htmlAst: articlesHtmlAst }],
    },
  },
  pageContext: { articlesList },
}) {
  return (
    <GridLayout>
      {createElement(RenderHtmlAst, {
        htmlAst: articlesHtmlAst,
      })}
      <ul>
        {articlesList.map(
          ({
            excerptAst,
            frontmatter: { created, title, updated },
            id,
            path,
          }) => (
            <li key={id}>
              {createElement(RenderHtmlAst, {
                // components: {},
                htmlAst: excerptAst,
              })}{" "}
              continue reading: <Link to={path}>{path}</Link>
              <p>
                published: {new Date(created).toLocaleDateString()}, last
                updated: {new Date(updated).toLocaleDateString()}
              </p>
            </li>
          )
        )}
      </ul>
    </GridLayout>
  )
}

export default Articles

export const query = graphql`
  query ArticlesPage {
    articlesMarkdown: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/modules/data/page/articles.md" } }
    ) {
      nodes {
        htmlAst
      }
    }
  }
`
