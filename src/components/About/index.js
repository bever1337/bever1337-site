import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
import { elementComponentFactory } from "features/ast/utils"

const aboutComponents = {
  a: elementComponentFactory("a", {
    rel: "noreferrer noopener",
    target: "_self",
  }),
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
