import React from "react"
import "bootstrap/dist/css/bootstrap.css"

interface Props {
  chapter: string
}

export const NavBarItem = (props: Props) => {
  const { chapter } = props
  return (
    <a className="nav-link" href={chapter}>
      <p className="navText">{chapter}</p>
    </a>
  )
}
