import PropTypes from "prop-types"
import { createElement } from "react"

import { Footer } from "components/Footer"
import { Navigation } from "components/Navigation"

import * as gridLayoutClassNames from "./gridLayout.module.css"

export function GridLayout({ children }) {
  return createElement(
    "div",
    {
      className: gridLayoutClassNames["wrapper"],
    },
    createElement(Navigation, { className: gridLayoutClassNames["header"] }),
    createElement(
      "main",
      { className: gridLayoutClassNames["body"] },
      children
    ),
    createElement(Footer, { className: gridLayoutClassNames["footer"] })
  )
}

GridLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
