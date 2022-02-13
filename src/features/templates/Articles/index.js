import React, { createElement, Fragment } from "react"

import { Main } from "components/Main"
import { Navigation } from "components/Navigation"
import * as wrapPageElementClassNames from "components/WrapPageElement/wrapPageElement.module.css"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"

export function Articles({
  data: {
    articlesMarkdown: {
      nodes: [{ htmlAst: articlesHtmlAst }],
    },
  },
}) {
  return (
    <Fragment>
      <Navigation className={wrapPageElementClassNames["header"]} />
      <Main>
        {createElement(RenderHtmlAst, {
          // components: indexComponents,
          htmlAst: articlesHtmlAst,
        })}
      </Main>
    </Fragment>
  )
}
