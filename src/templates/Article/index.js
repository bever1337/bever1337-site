import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"

function Article({
  pageContext: {
    article: {
      frontmatter: { created, updated },
      htmlAst,
    },
  },
}) {
  return (
    <GridLayout>
      <p>
        published: {new Date(created).toLocaleString()},<br />
        last updated: {new Date(updated).toLocaleString()}
      </p>
      {createElement(RenderHtmlAst, { htmlAst })}{" "}
    </GridLayout>
  )
}

export default Article
