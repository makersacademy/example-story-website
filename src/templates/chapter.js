import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { DoublePage } from "../components/index"

export default function NewChapter({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Layout>
        <DoublePage>
          <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </DoublePage>
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
