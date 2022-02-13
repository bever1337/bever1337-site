import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"

export function About({
  data: {
    aboutMarkdown: {
      nodes: [{ htmlAst: aboutHtmlAst }],
    },
  },
}) {
  return (
    <GridLayout>
      {createElement(RenderHtmlAst, {
        htmlAst: aboutHtmlAst,
      })}
    </GridLayout>
  )
}
