import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { DoublePage } from "../components/index"
//import { PageContent } from "../queries"

interface dataItem {
  title: string
  body: object
}
interface Data {
  data: dataItem
}

export default function NewChapter(data: Data) {
  const { frontmatter } = data.data.markdownRemark
  const { title, leftPage, rightPage } = frontmatter
  return (
    <Layout>
      <DoublePage title={title} leftPage={leftPage} rightPage={rightPage} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      ...ChapterFrontmatter
    }
  }
`
