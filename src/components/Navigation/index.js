import { graphql, Link, StaticQuery } from "gatsby"
import React, { createElement } from "react"

import { RenderHtmlAst } from "features/ast/RenderHtmlAst"
import { elementComponentFactory } from "features/ast/utils"

import * as navigationClassNames from "./navigation.module.css"

const navigationComponents = {
  a({ children, href }) {
    return createElement(Link, { to: href }, children)
  },
  li: elementComponentFactory("li", {
    className: navigationClassNames["nav__item"],
  }),
  ul: elementComponentFactory("ul", {
    className: navigationClassNames["nav__list"],
  }),
}

function NavigationRender({
  navigationItemsAst: {
    nodes: [{ htmlAst: navigationItemsHtmlAst }],
  },
}) {
  return (
    <nav>
      {createElement(RenderHtmlAst, {
        components: navigationComponents,
        htmlAst: navigationItemsHtmlAst,
      })}
    </nav>
  )
}

export function Navigation() {
  return (
    <StaticQuery
      query={graphql`
        query NavigationQuery {
          navigationItemsAst: allMarkdownRemark(
            filter: {
              fileAbsolutePath: { glob: "**/modules/data/navigation-items.md" }
            }
          ) {
            nodes {
              htmlAst
            }
          }
        }
      `}
      render={NavigationRender}
    />
  )
}
