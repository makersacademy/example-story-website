import React from "react"
import { Link } from "gatsby"
import "../navBar/navBar.scss"

interface Props {
  nextLink: string
}

export const NextPageLink = (props: Props) => {
  const { nextLink } = props
  return (
    <Link to={nextLink}>
      <div className="triangle-right" />
    </Link>
  )
}

