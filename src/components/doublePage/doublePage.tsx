import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

import { LeftPage, RightPage } from "../index"
import "./doublePage.scss"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
  imageWithoutText?: any
}

interface Props {
  title: string
  leftPage: Array<PageItem>
  rightPage: Array<PageItem>
  leftPageLink: string
  rightPageLink: string
}

export const DoublePage = (props: Props) => {
  const { title, leftPage, rightPage} = props

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

    var linkArray: string[] = []

    listLinks.allMarkdownRemark.edges.map(
      ({ node }: { node: any }, index: number) => (
        linkArray.push(node.fields.slug)
      )
    )

    var rightLink = linkArray[linkArray.indexOf(location.pathname) + 1]
    var leftLink = linkArray[linkArray.indexOf(location.pathname) - 1]
    
  return (
    <div className="container d-flex justify-content-around" id="double-page">
        <Link to={rightLink}><div className="triangle-right"></div></Link>
        <div className="triangle-left"></div>
      <div className="row ">
        <LeftPage leftPage={leftPage} title={title}></LeftPage>
        <RightPage rightPage={rightPage} />
      </div>
    </div>
  )
}
