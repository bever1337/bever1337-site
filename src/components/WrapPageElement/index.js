import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import "./index.css"

export function WrapPageElement({ element }) {
  return (
    <Fragment>
      <Helmet title="@bever1337" defer={false}>
        <link href={withPrefix("/favicon.ico")} rel="icon" sizes="any" />
        <link
          href={withPrefix("/apple-touch-icon.png")}
          rel="apple-touch-icon"
        />
        <link
          href={withPrefix("/favicon-16x16.png")}
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href={withPrefix("/favicon-32x32.png")}
          sizes="32x32"
          rel="icon"
          type="image/png"
        />
        <link href={withPrefix("/site.webmanifest")} rel="manifest" />
      </Helmet>
      {element}
    </Fragment>
  )
}

WrapPageElement.propTypes = {
  element: PropTypes.element.isRequired,
}
