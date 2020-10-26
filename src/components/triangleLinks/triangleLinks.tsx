import React from "react"
import { Link } from "gatsby"
import "../navBar/navBar.scss"

interface Props {
  pathName: string
  listLinks: Array<string>
}

export const TriangleLinks = (props: Props) => {
  const { pathName, listLinks } = props

  var rightLink: string =
    typeof window !== "undefined"
      ? listLinks[listLinks.indexOf(pathName) + 1]
      : ""

  var leftLink: string =
    typeof window !== "undefined"
      ? listLinks[listLinks.indexOf(pathName) - 1]
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
