import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useStaticQuery, graphql } from "gatsby"
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap"

import { NavBarItem, TopHeader } from "../index"
import "./navBar.scss"

export const NavBar = () => {
  const listLinks = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___chapter }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              jobTitle
              greeting
            }
          }
        }
      }
    }
  `)
  var listItems = listLinks.allMarkdownRemark.edges.map(
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

  const topHeaderItems = listLinks.allMarkdownRemark.edges[0].node.frontmatter
  const { jobTitle, greeting } = topHeaderItems

  return (
    <div className="container">
      <div className="row justify-content-center">
        <TopHeader
          greeting={greeting}
          jobTitle={jobTitle}
          //
        ></TopHeader>

        <Navbar light expand="md" className=" py-0">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <ul className="navbar-nav">{listItems}</ul>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}
