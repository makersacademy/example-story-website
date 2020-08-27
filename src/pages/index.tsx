import React from "react"
import { Link, graphql } from "gatsby"
import { BookFrontCover } from "../components/index"

import { Layout, SEO } from "../components"

const md = data => {
  const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BookFrontCover data={data.allMarkdownRemark.edges[0].node.frontmatter} />
  </Layout>
)
export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index/" } }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
        }
      }
    }
  }
`

export default IndexPage
