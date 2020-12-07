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

  const nextPreviousData = useStaticQuery(graphql`
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

  const { next, previous } = nextPreviousData.allMarkdownRemark.edges[chapter]

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      next,
      previous,
    })
  )

  return (
    <div>
      <NavigationContainer slug={slug} chapter={chapter} />
      <main>{childrenWithProps}</main>
    </div>
  )
}

export { Layout }
