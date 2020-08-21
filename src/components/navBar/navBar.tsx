import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { NavBarLabels } from "../index"
import "./navBar.scss"

export const NavBar = () => {
  const listItems = NavBarLabels.chapters.map((chapter, index) => (
    <a key={index} className="nav-link" href="/chapter1">
      <p className="navText">{chapter}</p>
    </a>
  ))
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark container py-5 ">
        <div>
          <ul className=" ml-auto navbar-nav">{listItems}</ul>
          <div className="rectangle"></div>
        </div>
      </nav>
    </div>
  )
}