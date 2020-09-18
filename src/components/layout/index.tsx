import React, { ReactNode } from "react"

import { NavBar } from "../index"
import "./index.scss"

interface Props {
  children: any
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <div>
      <div className="d-flex justify-content-center">
        <NavBar />
      </div>
      <main>{children}</main>
    </div>
  )
}

export { Layout }
