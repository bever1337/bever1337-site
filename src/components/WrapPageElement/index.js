import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

import "./index.css"

export function WrapPageElement({ element }) {
  return (
    <Fragment>
      <Helmet title="@bever1337" defer={false}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      {element}
    </Fragment>
  )
}

WrapPageElement.propTypes = {
  element: PropTypes.element.isRequired,
}
