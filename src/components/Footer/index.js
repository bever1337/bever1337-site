import React, { Fragment } from "react"

import packageJson from "../../../package.json"

export function Footer() {
  return (
    <Fragment>
      <hr />
      <footer>
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
    </Fragment>
  )
}
