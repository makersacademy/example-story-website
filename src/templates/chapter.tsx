import React from "react"
import dompurify from "dompurify"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { DoublePage } from "../components/index"

interface Data {
  data: object
}

export default function NewChapter(data: Data) {
  const { frontmatter, html } = data.data.markdownRemark
  const { title, body, leftPage, rightPage } = frontmatter

  const sanitizer = dompurify.sanitize
  return (
    <Layout>
      <DoublePage title={title} leftPage={leftPage} rightPage={rightPage} />
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

        leftPage {
          title
          subTitle
          content
        }
        rightPage {
          title
          subTitle
          content
        }
      }
    }
  }
`
