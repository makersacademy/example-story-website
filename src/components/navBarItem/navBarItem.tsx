import React from "react"
import "bootstrap/dist/css/bootstrap.css"

export const NavBarItem = props => {
  return (
    <a className="nav-link" href={props.chapter}>
      <p className="navText">{props.chapter}</p>
    </a>
  )
}
