import React from "react"
import { Link } from "gatsby"
import "../navBar/navBar.scss"

interface Props {
  previousLink: string
  lastPage?: boolean
}

export const PreviousPageLink = (props: Props) => {
  const { previousLink, lastPage } = props
  if (lastPage == true) {
    return (
      <Link to={previousLink}>
        <div className="triangle-left-lastPage" />
      </Link>
    )
  } else {
    return (
      <Link to={previousLink}>
        <div className="triangle-left" />
      </Link>
    )
  }
}
