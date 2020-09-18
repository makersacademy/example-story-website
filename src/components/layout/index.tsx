import React, { ReactNode } from "react"

import { NavBar } from "../index"
import "./index.scss"

const Layout = (props: any) => {
  const { children }: { children: ReactNode } = props

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
