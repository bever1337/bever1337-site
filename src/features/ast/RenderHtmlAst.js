import PropTypes from "prop-types"
import {
  cloneElement,
  createElement as reactCreateElement,
  Fragment as ReactFragment,
} from "react"

import { useRehypeReact } from "./utils"

const noComponents = {}

export function RenderHtmlAst({
  components = noComponents,
  createElement = reactCreateElement,
  htmlAst,
  Fragment = ReactFragment,
  ...rest
}) {
  return cloneElement(
    useRehypeReact(components, createElement, Fragment)(htmlAst),
    rest
  )
}

RenderHtmlAst.propTypes = {
  components: PropTypes.objectOf(PropTypes.elementType),
  createElement: PropTypes.func,
  Fragment: PropTypes.element,
  htmlAst: PropTypes.object,
}
