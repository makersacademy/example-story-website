import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useStaticQuery, graphql, Link } from "gatsby"
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

  var linkArray: string[] = []

  listLinks.allMarkdownRemark.edges.map(
    ({ node }: { node: any }, index: number) => (
      linkArray.push(node.fields.slug)
    )
  )

  var rightLink: string = linkArray[linkArray.indexOf(location.pathname) + 1]
  var leftLink: string = linkArray[linkArray.indexOf(location.pathname) - 1]


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
        <Link to={rightLink}>
          <div className="triangle-right"/>
          <div className="triangle-right-inner"/>
          </Link>
        <Link to={leftLink}>
          <div className="triangle-left"/>
          <div className="triangle-left-inner"/>
        </Link>
      </div>
    </div>
  )
}
