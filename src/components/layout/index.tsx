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

  return (
    <div>
      <NavigationContainer slug={slug} chapter={chapter} />
      <main>{children}</main>
    </div>
  )
}

export { Layout }
