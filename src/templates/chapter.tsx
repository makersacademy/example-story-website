import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { DoublePage } from "../components/index"

interface Data {
  data: object
}

export default function NewChapter(data: Data) {
  const { frontmatter, html } = data.data.markdownRemark
  const { title } = frontmatter
  return (
    <div>
      <Layout>
        <DoublePage />
        <div>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
