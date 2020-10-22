import React, { ReactNode } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { NavBar } from "../index"
import "./index.scss"



interface Props {
  children: ReactNode
  pathName: string
}

const Layout = (props: Props) => {
  const { children, pathName } = props

  const layoutData = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___chapter }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              jobTitle
              greeting
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <NavBar pathName={pathName} layoutData={layoutData}/>
      <main>{children}</main>
    </div>
  )
}

export { Layout }
