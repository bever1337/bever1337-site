import React, { createElement, Fragment } from "react"

import { Main } from "components/Main"
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
      <Main>
        {createElement(RenderHtmlAst, {
          // components: indexComponents,
          htmlAst: aboutHtmlAst,
        })}
      </Main>
    </Fragment>
  )
}
