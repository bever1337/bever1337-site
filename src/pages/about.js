import { graphql } from "gatsby"

import { About } from "features/templates/About"

export default About

export const query = graphql`
  query AboutPage {
    aboutMarkdown: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/modules/data/page/about.md" } }
    ) {
      nodes {
        htmlAst
      }
    }
  }
`
