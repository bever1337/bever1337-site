import { graphql } from "gatsby"

import { Index } from "features/templates/Index"

export default Index

export const query = graphql`
  query IndexPage {
    indexMarkdown: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/modules/data/page/index.md" } }
    ) {
      nodes {
        htmlAst
      }
    }
  }
`
