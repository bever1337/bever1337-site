import { graphql } from "gatsby"

import { About } from "components/About"

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
