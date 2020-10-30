import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Pagers, NavBar } from "../index"
import "./navigationContainer.scss"

interface Props {
  slug: string
  chapter: string
}

const NavigationContainer = (props: Props) => {
  const { slug, chapter } = props

  const layoutData = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___chapter }) {
        edges {
          previous {
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
          }
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

  const listLinks = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.fields.slug
  )

  const frontmatterData = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.frontmatter
  )

  const next = chapter ? layoutData.allMarkdownRemark.edges[chapter].next : ""
  const previous = chapter
    ? layoutData.allMarkdownRemark.edges[chapter].previous
    : ""

  const nextLink = next ? next.fields.slug : null
  const previousLink = previous ? previous.fields.slug : null

  return (
    <div>
      <NavBar
        slug={slug}
        listLinks={listLinks}
        frontmatterData={frontmatterData}
      />
      <div className="d-flex justify-content-center">
        <Pagers nextLink={nextLink} previousLink={previousLink} />
      </div>
    </div>
  )
}

export { NavigationContainer }
