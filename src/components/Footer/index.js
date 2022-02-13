import PropTypes from "prop-types"
import React from "react"

// import * as footerClassNames from "./footer.module.css"

import packageJson from "../../../package.json"

export function Footer({ className = "" }) {
  return (
    <footer className={`${className} `}>
      <hr />
      <p>
        {`${packageJson.name} v${packageJson.version}, revision: ${process.env.GATSBY_GIT_HASH}`}
      </p>
      <a
        href={packageJson.repository.url}
        rel="noreferrer noopener"
        target="_self"
      >
        source
      </a>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}
