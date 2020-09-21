import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap"

import { navBar } from "../../labels"
import { NavBarItem } from "../index"
import "./navBar.scss"

export const NavBar = () => {
  const navBarItems = navBar.chapters.map((chapter, index) => (
    <NavBarItem key={index} chapter={chapter}></NavBarItem>
  ))
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div className=" navbar-nav">{navBarItems}</div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
// const listItems = navBar.chapters.map((chapter, index) => (
//   <NavBarItem key={index} chapter={chapter}></NavBarItem>
// ))
// return (
//   <div>
//     <nav className="navbar navbar-expand-lg navbar-dark  py-5 ">
//       <Button id="toggler"> Toggle</Button>
//       <UncontrolledCollapse toggler="#toggler">
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className=" navbar-nav">{listItems}</div>
//           {/* <div className="rectangle"></div> */}
//         </div>
//       </UncontrolledCollapse>
//     </nav>
//   </div>
// )
