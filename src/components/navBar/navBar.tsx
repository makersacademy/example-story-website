import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useStaticQuery, graphql } from "gatsby"
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap"
import { NavBarItem } from "../index"
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

  return (
    <div>
      <Navbar light expand="md" className="py-0">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div className="navbar-nav bottom-border">{listItems}</div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
