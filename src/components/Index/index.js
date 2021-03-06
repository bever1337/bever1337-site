import { createElement } from "react"

import * as indexClassNames from "./index.module.css"

import { Footer } from "components/Footer"
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
    "div",
    { className: indexClassNames["wrapper"] },
    createElement(
      "main",
      { className: indexClassNames["main"] },
      createElement(RenderHtmlAst, {
        components: indexComponents,
        htmlAst: indexHtmlAst,
      }),
      createElement(Navigation)
    ),
    createElement(Footer, {
      className: indexClassNames["footer"],
    })
  )
}
