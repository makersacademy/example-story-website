import React from "react"
import { Link } from "gatsby"
import { NavItem } from "reactstrap"

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
    <NavItem className="nav-bar-item">
      <Link to={chapterLink} activeClassName="active">
        <>{chapterTitle}</>
      </Link>
    </NavItem>
  )
}
