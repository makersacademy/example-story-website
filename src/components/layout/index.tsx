import React, { ReactNode } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { NavBar, TriangleLinks } from "../index"
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

  const listLinks = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }, index: number) => node.fields.slug
  )

  const frontmatterData = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }, index: number) => node.frontmatter
  )

  return (

    <div>
        <NavBar
          pathName={pathName}
          listLinks={listLinks}
          frontmatterData={frontmatterData}
        />
      <div className="d-flex justify-content-center">
        <TriangleLinks pathName={pathName} listLinks={listLinks}/>
      </div>
        <main>{children}</main>
      </div>
  )
}

export { Layout }
