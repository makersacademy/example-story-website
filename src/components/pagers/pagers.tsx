import React from "react"

import { PreviousPageLink, NextPageLink } from "../index"

interface Props {
  nextLink: string
  previousLink: string
}

export const Pagers = (props: Props) => {
  const { nextLink, previousLink } = props

  if (!previousLink) {
    return <NextPageLink nextLink={nextLink} homePage={true} />
  } else if (!nextLink) {
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
