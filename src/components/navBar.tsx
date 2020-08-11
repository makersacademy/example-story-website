import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./navBar.scss"
import { NavBarLabels } from "./index"

export const NavBar = () => {
  const listItems = NavBarLabels.chapters.map(chapter => (
    <a className="nav-link" href="#">
      {chapter}
    </a>
  ))
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <div>
          <ul className="ml-auto navbar-nav">{listItems}</ul>
          <div className="rectangle"></div>
        </div>
      </nav>
    </div>
  )
}
