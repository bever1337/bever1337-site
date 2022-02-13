import { graphql } from "gatsby"

import { Articles } from "features/templates/Articles"

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
