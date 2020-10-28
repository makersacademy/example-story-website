import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap"

import { NavBarItem, TopHeader } from "../index"

interface FrontmatterData {
  title: string
  jobTitle: string
  greeting: string
}
interface Props {
  pathName: string
  listLinks: Array<string>
  frontmatterData: Array<FrontmatterData>
}

export const NavBar = (props: Props) => {
  const { pathName, listLinks, frontmatterData } = props

  var listItems = listLinks.map((link: any, index: number) => (
    <NavBarItem
      key={index}
      chapterTitle={frontmatterData[index].title}
      chapterLink={link}
    ></NavBarItem>
  ))

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const topHeaderItems = frontmatterData[0]
  const { jobTitle, greeting } = topHeaderItems

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <TopHeader
          greeting={greeting}
          jobTitle={jobTitle}
          //
        ></TopHeader>
      </div>
      <div className="row justify-content-center ">
        <Navbar light expand="md" className=" py-0">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-0 " navbar>
              <ul className="navbar-nav ml-0 ">{listItems}</ul>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}
