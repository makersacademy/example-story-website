import React from "react"
import { Link } from "gatsby"

import { PreviousPageLink, NextPageLink } from "../index"

interface Props {
  slug: string
  listLinks: Array<string>
}

export const Pagers = (props: Props) => {
  const { slug, listLinks } = props

  var nextLink: string = listLinks[listLinks.indexOf(slug) + 1]

  var previousLink: string = listLinks[listLinks.indexOf(slug) - 1]

  if (slug == "/") {
    return <NextPageLink nextLink={nextLink} homePage={true} />
  } else if (slug == "/contact/") {
    return <PreviousPageLink lastPage={true} previousLink={previousLink} />
  } else {
    return (
      <>
        <PreviousPageLink previousLink={previousLink} />
        <div>&nbsp;&nbsp;</div>
        <NextPageLink nextLink={nextLink} />
      </>
    )
  }
}
