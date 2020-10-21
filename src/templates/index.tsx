import React from "react"
import { graphql } from "gatsby"

import { BookFrontCover } from "../components/index"
import { Layout, SEO } from "../components"

const IndexPage = ({ location, data }) => {
  const {
    jobTitle,
    greeting,
    careerAim,
    image,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <BookFrontCover
        jobTitle={jobTitle}
        greeting={greeting}
        careerAim={careerAim}
        image={image}
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
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`

export default IndexPage
