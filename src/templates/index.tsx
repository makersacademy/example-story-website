import React from "react"
import { graphql } from "gatsby"

import { BookFrontCover } from "../components/index"
import { Layout, SEO } from "../components"

interface Props {
  data: any
  location: Link
}

interface Link {
  pathname: string
}

const IndexPage = (props: Props) => {
  const { location, data } = props
  const { pathname } = location
  const {
    jobTitle,
    greeting,
    careerAim,
    image,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <Layout pathName={pathname}>
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
