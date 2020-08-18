import React from "react"
import { Link } from "gatsby"
import { FrontPage } from "../components/FrontPage/FrontPage"

import { Image, Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FrontPage />
  </Layout>
)

export default IndexPage
