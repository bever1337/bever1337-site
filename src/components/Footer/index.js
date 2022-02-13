import React from "react"

import * as wrapPageElementClassNames from "components/WrapPageElement/wrapPageElement.module.css"

import packageJson from "../../../package.json"

export function Footer() {
  return (
    <footer className={wrapPageElementClassNames["footer"]}>
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
