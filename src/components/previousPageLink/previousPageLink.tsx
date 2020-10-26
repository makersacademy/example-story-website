import React from "react"
import { Link } from "gatsby"
import "../navBar/navBar.scss"

interface Props {
  previousLink: string
}

export const PreviousPageLink = (props: Props) => {
  const { previousLink } = props
  return (
    <Link to={previousLink}>
      <div className="triangle-left" />
    </Link>
  )
}

