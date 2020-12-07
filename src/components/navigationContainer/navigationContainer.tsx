import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Pagers, NavBar } from "../index"
import "./navigationContainer.scss"

interface Direction {
  fields: { slug: string }
}

interface FrontmatterData {
  title: string
  jobTitle: string
  greeting: string
}

interface Props {
  slug: string
  chapter: string
  listLinks: Array<string>
  frontmatterData: Array<FrontmatterData>
  next: Direction
  previous: Direction
}

const NavigationContainer = (props: Props) => {
  const { slug, next, previous, frontmatterData, listLinks } = props

  return (
    <div>
      <NavBar
        slug={slug}
        listLinks={listLinks}
        frontmatterData={frontmatterData}
      />
      <div className="d-flex justify-content-center">
        <Pagers next={next} previous={previous} />
      </div>
    </div>
  )
}

export { NavigationContainer }
