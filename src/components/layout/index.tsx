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
  slug: string
  chapter: string
  listLinks: Array<string>
  frontmatterData: Array<FrontmatterData>
}

const Layout = (props: Props) => {
  const { children, slug, chapter } = props

  return (
    <div>
      <NavigationContainer slug={slug} chapter={chapter} />
      <main>{children}</main>
    </div>
  )
}

export { Layout }
