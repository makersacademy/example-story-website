import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./navBarItem.scss"

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
    <Link className="nav-link test" activeClassName="active" to={chapterLink}>
      <span className="navText ">{chapterTitle}</span>
      <div className="active-overlay"></div>
    </Link>
  )
}
