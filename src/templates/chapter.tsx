import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { DoublePage } from "../components/index"

interface dataItem {
  title: string
  body: object
}

interface Props {
  data: dataItem
  slug: string
}

const NewChapter = (props: Props) => {
  const { data } = props
  const { frontmatter } = data.markdownRemark
  const { slug } = data.markdownRemark.fields
  const { title, leftPage, rightPage, chapter } = frontmatter

  return (
    <Layout slug={slug} chapter={chapter}>
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
        chapter
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
