import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"

// duplication
interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
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
      <div className="row">{listRightPage}</div>
    </div>
  )
}
