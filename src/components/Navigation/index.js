import { graphql, Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
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

export function Navigation({ className = "" }) {
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
      render={function NavigationRender({
        navigationItemsAst: {
          nodes: [{ htmlAst: navigationItemsHtmlAst }],
        },
      }) {
        return (
          <nav className={`${className} ${navigationClassNames["nav"]}`}>
            {createElement(RenderHtmlAst, {
              components: navigationComponents,
              htmlAst: navigationItemsHtmlAst,
            })}
          </nav>
        )
      }}
    />
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
}
