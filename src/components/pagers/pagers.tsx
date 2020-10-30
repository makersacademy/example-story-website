import React from "react"

import { PreviousPageLink, NextPageLink } from "../index"

interface Props {
  slug: string
  listLinks: Array<string>
}

export const Pagers = (props: Props) => {
  const { slug, listLinks, nextLink, previousLink } = props
  console.log(nextLink, previousLink)

  // var nextLink: string = listLinks[listLinks.indexOf(slug) + 1]

  // var previousLink: string = listLinks[listLinks.indexOf(slug) - 1]

  if (slug === listLinks[0]) {
    return <NextPageLink nextLink={nextLink} homePage={true} />
  } else if (slug === listLinks[-1]) {
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
