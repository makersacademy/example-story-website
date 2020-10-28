import React, { ReactNode } from "react"

import { NavigationContainer } from "../index"
import "./index.scss"

interface FrontmatterData {
  title: string
  jobTitle: string
  greeting: string
}

interface Props {
  children: ReactNode
  pathName: string
  listLinks: Array<string>
  frontmatterData: Array<FrontmatterData>
}

const Layout = (props: Props) => {
  const { children, pathName } = props

  return (
    <div>
      <NavigationContainer pathName={pathName} />
      <main>{children}</main>
    </div>
  )
}

export { Layout }
