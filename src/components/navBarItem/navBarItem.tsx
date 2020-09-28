import React from "react"
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
    <a className="nav-link" href={chapterLink}>
      <span className="navText">{chapterTitle}</span>
    </a>
  )
}
