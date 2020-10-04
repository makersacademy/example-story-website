import React, { ReactNode } from "react"

import { NavBar } from "../index"
import "./index.scss"

const Layout = (props: any) => {
  const { children }: { children: ReactNode } = props

  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export { Layout }
