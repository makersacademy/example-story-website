import React from "react"
import { Link } from "gatsby"
import { BookFrontCover } from "../components/index"

import { Image, Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BookFrontCover />
  </Layout>
)

export default IndexPage
