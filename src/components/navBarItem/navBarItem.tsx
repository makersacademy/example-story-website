import React from "react"
import "bootstrap/dist/css/bootstrap.css"

export const NavBarItem = props => {
  const { chapter } = props
  return (
    <a className="nav-link" href={chapter}>
      <p className="navText">{chapter}</p>
    </a>
  )
}
