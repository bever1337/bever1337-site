import PropTypes from "prop-types"
import { createElement } from "react"

import { Footer } from "components/Footer"

import "./index.css"
import * as wrapPageElementClassNames from "./wrapPageElement.module.css"

export function WrapPageElement({ element }) {
  return createElement(
    "div",
    {
      className: wrapPageElementClassNames["wrapper"],
    },
    element,
    createElement(Footer)
  )
}

WrapPageElement.propTypes = {
  element: PropTypes.element.isRequired,
}
