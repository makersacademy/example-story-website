import React from "react"
import { Link } from "gatsby"
import "../navBar/navBar.scss"

interface Props {
  nextLink: string
  homePage?: boolean
}

export const NextPageLink = (props: Props) => {
  const { nextLink, homePage } = props
  let home
  if (homePage == true) {
    home = { left: "2px" }

    return (
      <Link to={nextLink}>
        <div className="triangle-right-home" />
      </Link>
    )
  } else {
    return (
      <Link to={nextLink}>
        <div className="triangle-right" />
      </Link>
    )
  }
}
