import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
}

interface Props {
  rightPage?: Array<PageItem>
}

export const RightPage = (props: Props) => {
  const { rightPage } = props

  if (rightPage) {
    var listRightPage = rightPage.map((pageItem: PageItem, index: number) => {
      return <BookSection key={index} pageItem={pageItem} />
    })
  } else {
    listRightPage = []
  }

  return (
    <div className="col-lg-6 col-md-6 py-5">
      <div>{listRightPage}</div>
    </div>
  )
}
