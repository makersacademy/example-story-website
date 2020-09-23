import React from "react"
import dompurify from "dompurify"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { DoublePage } from "../components/index"

interface Data {
  data: any
}

export default function NewChapter(data: Data) {
  const { frontmatter, html } = data.data.markdownRemark
  const { title, body } = frontmatter

  const sanitizer = dompurify.sanitize
  return (
    <Layout>
      <DoublePage title={title} body={body} />
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        body {
          title
          subTitle
          content
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
