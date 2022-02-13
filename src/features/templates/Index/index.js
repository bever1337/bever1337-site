import { createElement } from "react"

import * as indexClassNames from "./index.module.css"

import { Navigation } from "components/Navigation"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
import { elementComponentFactory } from "features/ast/utils"

const indexComponents = {
  h1: elementComponentFactory("h1", {
    className: indexClassNames["main__heading"],
  }),
}

export function Index({
  data: {
    indexMarkdown: {
      nodes: [{ htmlAst: indexHtmlAst }],
    },
  },
}) {
  return createElement(
    "main",
    { className: indexClassNames["main"] },
    createElement(RenderHtmlAst, {
      components: indexComponents,
      htmlAst: indexHtmlAst,
    }),
    createElement(Navigation)
  )
}
