import { graphql } from "gatsby"

import { Licenses } from "components/Licenses"

export default Licenses

export const query = graphql`
  query LicensePage {
    licensesMarkdown: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/modules/data/page/licenses.md" } }
    ) {
      nodes {
        htmlAst
      }
    }
  }
`
