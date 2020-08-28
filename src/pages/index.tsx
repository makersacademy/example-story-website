import React from "react"
import { graphql } from "gatsby"

import { BookFrontCover } from "../components/index"
import { Layout, SEO } from "../components"

interface Props {
  data: any
}
const IndexPage = ({ data }) => {
  const {
    jobTitle,
    greeting,
    careerAim,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <BookFrontCover
        jobTitle={jobTitle}
        greeting={greeting}
        careerAim={careerAim}
      />
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
