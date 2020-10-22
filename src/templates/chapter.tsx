import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { DoublePage } from "../components/index"

interface dataItem {
  title: string
  body: object
}
interface Link {
  pathname: string
}
interface Props {
  data: dataItem
  location: Link
}

const NewChapter = (props: Props) => {
  const { location, data } = props
  const { pathname } = location
  const { frontmatter } = data.markdownRemark
  const { title, leftPage, rightPage } = frontmatter
  return (
    <Layout pathName={pathname}>
      <DoublePage title={title} leftPage={leftPage} rightPage={rightPage} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        leftPage {
          title
          subTitle
          content
          boxWidth
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        rightPage {
          title
          subTitle
          content
          boxWidth
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
export default NewChapter
