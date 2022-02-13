import { createElement, Fragment } from "react"

import * as indexClassNames from "./index.module.css"

import { Main } from "components/Main"
import { Navigation } from "components/Navigation"
import * as wrapPageElementClassNames from "components/WrapPageElement/wrapPageElement.module.css"
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
    Fragment,
    undefined,
    createElement("div", { className: wrapPageElementClassNames["header"] }),
    createElement(
      Main,
      { className: indexClassNames["main"] },
      createElement(RenderHtmlAst, {
        components: indexComponents,
        htmlAst: indexHtmlAst,
      }),
      createElement(Navigation)
    )
  )
}
