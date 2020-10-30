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

  //console.log(layoutData.allMarkdownRemark.edges[chapter])

  const listLinks = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.fields.slug
  )

  const frontmatterData = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.frontmatter
  )

  const nextLink = layoutData.allMarkdownRemark.edges[chapter].next.fields.slug

  const previousLink =
    layoutData.allMarkdownRemark.edges[chapter].previous.fields.slug

  return (
    <div>
      <NavBar
        slug={slug}
        listLinks={listLinks}
        frontmatterData={frontmatterData}
      />
      <div className="d-flex justify-content-center">
        <Pagers
          slug={slug}
          listLinks={listLinks}
          nextLink={nextLink}
          previousLink={previousLink}
        />
        {/* [{next: /2 slug: /1 previous/0}, .... ]  */}
      </div>
    </div>
  )
}

export { NavigationContainer }
