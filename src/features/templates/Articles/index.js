import React, { createElement, Fragment } from "react"

import { Navigation } from "components/Navigation"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
// import { elementComponentFactory } from "features/ast/utils"

export function Articles({
  data: {
    articlesMarkdown: {
      nodes: [{ htmlAst: articlesHtmlAst }],
    },
  },
}) {
  return (
    <Fragment>
      <Navigation />
      <main>
        {createElement(RenderHtmlAst, {
          // components: indexComponents,
          htmlAst: articlesHtmlAst,
        })}
      </main>
    </Fragment>
  )
}
