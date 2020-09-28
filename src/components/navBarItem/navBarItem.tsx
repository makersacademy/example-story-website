import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"

interface Props {
  chapterLink: string
  chapterTitle: string
}

export const NavBarItem = (props: Props) => {
  let { chapterLink, chapterTitle } = props

  if (chapterTitle === "") {
    chapterTitle = "Home"
  }

  return (
    <Link className="nav-link" activeClassName="active" to={chapterLink}>
      <span className="navText">{chapterTitle}</span>
    </Link>
  )
}
