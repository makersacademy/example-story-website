import React from "react"
import { Link } from "gatsby"
import "../navBar/navBar.scss"
import { PreviousPageLink, NextPageLink } from "../index"

interface Props {
  pathName: string
  listLinks: Array<string>
}

export const Pagers = (props: Props) => {
  const { pathName, listLinks } = props

  var nextLink: string =
    typeof window !== "undefined"
      ? listLinks[listLinks.indexOf(pathName) + 1]
      : ""

  var previousLink: string =
    typeof window !== "undefined"
      ? listLinks[listLinks.indexOf(pathName) - 1]
      : ""

  if (pathName == "/") {
    return <NextPageLink nextLink={nextLink} homePage={true} />
  } else if (pathName == "/contact/") {
    return <PreviousPageLink lastPage={true} previousLink={previousLink} />
  } else {
    return (
      <>
        <PreviousPageLink previousLink={previousLink} />
        <div>&nbsp;&nbsp;</div>
        <NextPageLink nextLink={nextLink} />
      </>
    )
  }
}
