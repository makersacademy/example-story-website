import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { DoublePage } from "../components/index"

interface dataItem {
  title: string
  body: object
}
interface Link {
  slug: string
}
interface Props {
  data: dataItem
  location: Link
}

const NewChapter = (props: Props) => {
  const { data } = props
  const { frontmatter } = data.markdownRemark
  const { slug } = data.markdownRemark.fields
  const { title, leftPage, rightPage } = frontmatter
  return (
    <Layout slug={slug}>
      <DoublePage title={title} leftPage={leftPage} rightPage={rightPage} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
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
