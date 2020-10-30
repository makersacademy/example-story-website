import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Pagers, NavBar } from "../index"
import "./navigationContainer.scss"
interface Props {
  slug: string
}

const NavigationContainer = (props: Props) => {
  const { slug } = props

  const layoutData = useStaticQuery(graphql`
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

  const listLinks = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.fields.slug
  )

  const frontmatterData = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.frontmatter
  )

  return (
    <div>
      <NavBar
        slug={slug}
        listLinks={listLinks}
        frontmatterData={frontmatterData}
      />
      <div className="d-flex justify-content-center">
        <Pagers slug={slug} listLinks={listLinks} />
      </div>
    </div>
  )
}

export { NavigationContainer }
