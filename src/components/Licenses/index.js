import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
import { A } from "features/ast/components"

const licensesComponents = {
  a: A,
}

export function Licenses({
  data: {
    licensesMarkdown: {
      nodes: [{ htmlAst }],
    },
  },
}) {
  return (
    <GridLayout>
      {createElement(RenderHtmlAst, {
        components: licensesComponents,
        htmlAst,
      })}
    </GridLayout>
  )
}
