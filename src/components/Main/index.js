import PropTypes from "prop-types"
import { createElement } from "react"

import * as wrapPageElementClassNames from "components/WrapPageElement/wrapPageElement.module.css"

export function Main({ children, className = "" }) {
  return createElement(
    "main",
    { className: `${className} ${wrapPageElementClassNames["body"]}` },
    children
  )
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}
