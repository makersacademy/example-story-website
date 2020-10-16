import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../navBar/navBar.scss"

export const TriangleLinks= () => {
  const listLinks = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___chapter }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  var linkArray: string[] = []

  listLinks.allMarkdownRemark.edges.map(
    ({ node }: { node: any } ) => (
      linkArray.push(node.fields.slug)
    )
  )

  var rightLink: string = linkArray[linkArray.indexOf(location.pathname) + 1]
  var leftLink: string = linkArray[linkArray.indexOf(location.pathname) - 1]

  return (
    <>
      <Link to={rightLink}>
        <div className="triangle-right"/>
      </Link>
      <Link to={leftLink}>
        <div className="triangle-left"/>
      </Link>
    </>
  )
}
