import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"

export function Articles({
  data: {
    articlesMarkdown: {
      nodes: [{ htmlAst: articlesHtmlAst }],
    },
  },
}) {
  return (
    <GridLayout>
      {createElement(RenderHtmlAst, {
        htmlAst: articlesHtmlAst,
      })}
    </GridLayout>
  )
}
