import PropTypes from "prop-types"
import React from "react"

// import * as footerClassNames from "./footer.module.css"

import packageJson from "../../../package.json"

export function Footer({ className = "" }) {
  return (
    <footer className={`${className} `}>
      <hr />
      <p>
        {`${packageJson.name} v${packageJson.version} revision: ${process.env.GATSBY_GIT_HASH}`}
        , Copyright (C) 2022 Bever1337
      </p>
      <a
        href={packageJson.repository.url}
        rel="noreferrer noopener"
        target="_self"
      >
        source
      </a>{" "}
      <a
        href={`${packageJson.repository.url}/blob/main/LICENSE`}
        rel="noreferrer noopener"
        target="_self"
      >
        license
      </a>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}
