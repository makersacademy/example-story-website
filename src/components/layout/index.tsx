import React, { ReactNode } from "react"

import { NavBar } from "../index"
import "./index.scss"

interface Props {
  children: ReactNode
  pathName: string
}

const Layout = (props: Props) => {
  const { children, pathName } = props

  return (
    <div>
      <NavBar pathName={pathName} />
      <main>{children}</main>
    </div>
  )
}

export { Layout }
