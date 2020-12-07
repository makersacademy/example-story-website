import React, { ReactNode } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { NavigationContainer } from "../index"
import "./index.scss"

interface Props {
  children: ReactNode
  slug: string
  chapter: string
}

const Layout = (props: Props) => {
  const { children, slug, chapter } = props

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

  const { next, previous } = layoutData.allMarkdownRemark.edges[chapter]

  const listLinks = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.fields.slug
  )

  const frontmatterData = layoutData.allMarkdownRemark.edges.map(
    ({ node }: { node: any }) => node.frontmatter
  )

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child as React.ReactElement<any>, {
      next,
      previous,
    })
  )

  return (
    <div>
      <NavigationContainer
        slug={slug}
        listLinks={listLinks}
        frontmatterData={frontmatterData}
        next={next}
        previous={previous}
        chapter={chapter}
      />
      <main>{childrenWithProps}</main>
    </div>
  )
}

export { Layout }
