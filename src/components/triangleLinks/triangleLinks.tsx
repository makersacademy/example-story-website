import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../navBar/navBar.scss"

interface Props {
  location: any
}

export const TriangleLinks = (props: Props) => {
  let { location } = props
  console.log({ location })
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

  const currentLink: string = location.pathname

  var rightLink: string = linkArray[linkArray.indexOf(currentLink) + 1]

  var leftLink: string = linkArray[linkArray.indexOf(currentLink) - 1]

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
