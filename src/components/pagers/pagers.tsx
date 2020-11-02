import React from "react"

import { PreviousPageLink, NextPageLink } from "../index"

interface Direction {
  fields: { slug: string }
}

interface Props {
  next: Direction | null
  previous: Direction | null
}

export const Pagers = (props: Props) => {
  const { next, previous } = props

  return (
    <>
      {previous && <PreviousPageLink previousLink={previous.fields.slug} />}
      <div>&nbsp;&nbsp;</div>
      {next && <NextPageLink nextLink={next.fields.slug} />}
    </>
  )
}
