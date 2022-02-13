import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
import { elementComponentFactory } from "features/ast/utils"

const licensesComponents = {
  a: elementComponentFactory("a", {
    rel: "noreferrer noopener",
    target: "_self",
  }),
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
