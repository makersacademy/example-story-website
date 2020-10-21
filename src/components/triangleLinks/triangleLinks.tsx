import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../navBar/navBar.scss"

export const TriangleLinks = () => {
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

  listLinks.allMarkdownRemark.edges.map(({ node }: { node: any }) =>
    linkArray.push(node.fields.slug)
  )

  const currentLink: string =
    typeof window !== "undefined" ? window.location.pathname : ""

  var rightLink: string =
    typeof window !== "undefined"
      ? linkArray[linkArray.indexOf(currentLink) + 1]
      : ""

  var leftLink: string =
    typeof window !== "undefined"
      ? linkArray[linkArray.indexOf(currentLink) - 1]
      : ""

  if (currentLink == "/") {
    console.log(currentLink)
    return (
      <Link to={rightLink}>
        <div className="triangle-right" style={{ left: "25px" }} />
      </Link>
    )
  } else if (currentLink == "/contact/") {
    console.log(currentLink)
    return (
      <Link to={leftLink}>
        <div className="triangle-left" />
      </Link>
    )
  } else {
    console.log(currentLink)
    return (
      <>
        <Link to={leftLink}>
          <div className="triangle-left" />
        </Link>
        <Link to={rightLink}>
          <div className="triangle-right" />
        </Link>
      </>
    )
  }
}
