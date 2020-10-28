import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { TriangleLinks, NavBar } from "../index"

interface Props {
  pathName: string
}

const NavigationContainer = (props: Props) => {
  const { pathName } = props

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
    ({ node }: { node: any }) => node.fields.slug
  )

  const frontmatterData = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.frontmatter
  )

  return (
    <div>
      <NavBar
        pathName={pathName}
        listLinks={listLinks}
        frontmatterData={frontmatterData}
      />
      <div className="d-flex justify-content-center">
        <TriangleLinks pathName={pathName} listLinks={listLinks} />
      </div>
    </div>
  )
}

export { NavigationContainer }
