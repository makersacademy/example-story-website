import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { navBar } from "../../labels"
import { NavBarItem } from "../index"
import "./navBar.scss"

interface Props {
  listItems: string
}

export const NavBar = () => {
  const listItems = navBar.chapters.map((chapter, index) => (
    <NavBarItem key={index} chapter={chapter}>

    </NavBarItem>
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
