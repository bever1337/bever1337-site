import PropTypes from "prop-types"
import { createElement } from "react"

import * as wrapPageElementClassNames from "components/WrapPageElement/wrapPageElement.module.css"

export function Main({ children }) {
  return createElement(
    "main",
    { className: wrapPageElementClassNames["body"] },
    children
  )
}

Main.propTypes = {
  children: PropTypes.element,
}
