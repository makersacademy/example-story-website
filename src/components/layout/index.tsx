import React, { ReactNode } from "react"

import { DataLayer } from "../index"
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
      <DataLayer pathName={pathName}/>
      <main>{children}</main>
    </div>
  )
}

export { Layout }
