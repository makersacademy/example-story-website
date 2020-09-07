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
  const { title } = frontmatter
  const sanitizer = dompurify.sanitize
  return (
    <div>
      <Layout>
        <DoublePage title={title} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: sanitizer(html) }} />
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
