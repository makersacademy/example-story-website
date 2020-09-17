import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useStaticQuery, gatsby } from "gatsby"
import { navBar } from "../../labels"
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
          }
        }
      }
    }
  `)
  const slugs = listLinks.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.fields.slug)
  })

  const listItems = navBar.chapters.map((chapter, index) => (
    <NavBarItem key={index} chapter={chapter}></NavBarItem>
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
