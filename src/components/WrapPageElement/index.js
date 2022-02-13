import PropTypes from "prop-types"
import { createElement, Fragment } from "react"

import { Footer } from "components/Footer"

export function WrapPageElement({ element }) {
  return createElement(Fragment, undefined, element, createElement(Footer))
}

WrapPageElement.propTypes = {
  element: PropTypes.element.isRequired,
}
