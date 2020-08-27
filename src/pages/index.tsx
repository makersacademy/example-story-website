import React from "react"
import { graphql } from "gatsby"
import { BookFrontCover } from "../components/index"

import { Layout, SEO } from "../components"

const md = data => {
  const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
  return (
    <div>
      <h1>{frontmatter.jobTitle}</h1>
      <p>{frontmatter.date}</p>
      <p>{frontmatter.greeting}</p>
      <p>{frontmatter.careerAim} </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

interface Props {
  data: any
}
const IndexPage = (props: Props) => {
  const { data } = props
  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <BookFrontCover data={frontmatter} />
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index/" } }) {
      edges {
        node {
          frontmatter {
            jobTitle
            greeting
            careerAim
            date(formatString: "DD MMMM YYYY")
          }
          html
        }
      }
    }
  }
`

export default IndexPage
