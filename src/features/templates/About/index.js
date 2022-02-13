import React, { createElement, Fragment } from "react"

import { Navigation } from "components/Navigation"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
// import { elementComponentFactory } from "features/ast/utils"

export function About({
  data: {
    aboutMarkdown: {
      nodes: [{ htmlAst: aboutHtmlAst }],
    },
  },
}) {
  return (
    <Fragment>
      <Navigation />
      <main>
        {createElement(RenderHtmlAst, {
          // components: indexComponents,
          htmlAst: aboutHtmlAst,
        })}
      </main>
    </Fragment>
  )
}
