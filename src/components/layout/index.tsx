import React, { ReactNode } from "react"

import { NavBar } from "../index"
import "./index.scss"

const Layout = (props: any) => {
  const { children }: { children: ReactNode } = props
  const { location }: { location: any } = props
  return (
    <div>
      <NavBar location={location} />
      <main>{children}</main>
    </div>
  )
}

export { Layout }
