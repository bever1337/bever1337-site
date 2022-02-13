import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as navigationClassNames from "./navigation.module.css"

const navigationLinkData = [
  ["/index", "/", "front page"],
  ["/articles", "/articles", "fake programmer thoughts"],
  ["/about", "/about", "about bever1337"],
  ["/licenses", "/licenses", ""],
]

export function Navigation({ className = "" }) {
  return (
    <nav className={`${className} ${navigationClassNames["nav"]}`}>
      <ul className={navigationClassNames["nav__list"]}>
        {navigationLinkData.map(([linkChildren, to, description]) => (
          <li className={navigationClassNames["nav__item"]} key={to}>
            <Link to={to}>{linkChildren}</Link>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
}
