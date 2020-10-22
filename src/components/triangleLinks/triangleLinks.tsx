import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../navBar/navBar.scss"

interface Props {
  pathName: string
  layoutData: any
}

export const TriangleLinks = (props: Props) => {
  const { pathName, layoutData } = props

  var linkArray: string[] = []

  layoutData.allMarkdownRemark.edges.map(({ node }: { node: any }) =>
    linkArray.push(node.fields.slug)
  )

  var rightLink: string =
    typeof window !== "undefined"
      ? linkArray[linkArray.indexOf(pathName) + 1]
      : ""

  var leftLink: string =
    typeof window !== "undefined"
      ? linkArray[linkArray.indexOf(pathName) - 1]
      : ""

  if (pathName == "/") {
    return (
      <Link to={rightLink}>
        <div className="triangle-right" style={{ left: "25px" }} />
      </Link>
    )
  } else if (pathName == "/contact/") {
    return (
      <Link to={leftLink}>
        <div className="triangle-left" />
        
      </Link>
    )
  } else {
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
