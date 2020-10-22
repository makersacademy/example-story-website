import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap"

import { NavBarItem, TopHeader, TriangleLinks } from "../index"
import "./navBar.scss"

interface Props {
  pathName: string
  layoutData: any
}

export const NavBar = (props: Props) => {
  const { pathName, layoutData } = props
  console.log(layoutData)

  var listItems = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }, index: number) => (
      <NavBarItem
        key={index}
        chapterTitle={node.frontmatter.title}
        chapterLink={node.fields.slug}
      ></NavBarItem>
    )
  )
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const topHeaderItems = layoutData.allMarkdownRemark.edges[0].node.frontmatter
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
        <TriangleLinks pathName={pathName} layoutData={layoutData} />
      </div>
    </div>
  )
}
