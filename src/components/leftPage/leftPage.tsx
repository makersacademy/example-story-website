import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
}

interface Props {
  title?: string
  leftPage?: Array<PageItem>
}

export const LeftPage = (props: Props) => {
  const { leftPage, title } = props

  if (leftPage) {
    var listLeftPage = leftPage.map((pageItem: PageItem, index: number) => {
      return <BookSection key={index} pageItem={pageItem} />
    })
  } else {
    listLeftPage = []
  }

  return (
    <div className=" col-lg-6 col-md-6 mid-line  ">
      <h2 className="heading px-3 py-3 ">{title}</h2>
      <div>{listLeftPage}</div>
    </div>
  )
}
