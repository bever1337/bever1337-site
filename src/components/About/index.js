import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
import { A } from "features/ast/components"

const aboutComponents = {
  a: A,
}

export function About({
  data: {
    aboutMarkdown: {
      nodes: [{ htmlAst }],
    },
  },
}) {
  return (
    <GridLayout>
      {createElement(RenderHtmlAst, {
        components: aboutComponents,
        htmlAst,
      })}
    </GridLayout>
  )
}
