import {
  cloneElement as reactCloneElement,
  createElement as reactCreateElement,
  useMemo,
} from "react"
import rehypeReact from "rehype-react"

export function useRehypeReact(components, createElement, Fragment) {
  return useMemo(
    function createHtmlAst() {
      return new rehypeReact({
        createElement,
        Fragment,
        components,
      }).Compiler
    },
    [components, createElement, Fragment]
  )
}

/**
 * @param {string} htmlElement
 * @param {object} additionalProps
 * @returns {Component}
 */
export function elementComponentFactory(htmlElement, additionalProps) {
  const element = reactCreateElement(htmlElement, additionalProps)
  function Element({ children, ...props }) {
    return reactCloneElement(element, props, children)
  }
  Element.displayName = `FactoryMade.${htmlElement
    .charAt(0)
    .toUpperCase()}${htmlElement.slice(1)}`
  return Element
}
