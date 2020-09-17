import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { useStaticQuery, graphql } from "gatsby"
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
    ({ node }: { node: any }, index) => (
      <NavBarItem
        key={index}
        chapterTitle={node.frontmatter.title}
        chapterLink={node.fields.slug}
      ></NavBarItem>
    )
  )
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
