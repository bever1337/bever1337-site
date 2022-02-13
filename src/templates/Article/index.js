import React, { createElement } from "react"

import { GridLayout } from "components/GridLayout"
import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
import { A } from "features/ast/components"

const articleComponents = { a: A }

function Article({
  pageContext: {
    article: {
      frontmatter: { created, updated },
      htmlAst,
    },
  },
}) {
  return (
    <GridLayout>
      <p>
        published: {new Date(created).toLocaleString()},<br />
        last updated: {new Date(updated).toLocaleString()}
      </p>
      {createElement(RenderHtmlAst, { components: articleComponents, htmlAst })}{" "}
    </GridLayout>
  )
}

export default Article
