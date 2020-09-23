import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"

interface BodyItem {
  title?: string
  subTitle?: string
  content?: string
}

interface Props {
  rightPage?: Array<BodyItem>
}

export const RightPage = (props: Props) => {
  const { rightPage } = props

  if (rightPage) {
    var listRightPage = rightPage.map((bodyItem: BodyItem, index: number) => {
      return <BookSection key={index} bodyItem={bodyItem} />
    })
  } else {
    listRightPage = []
  }

  return (
    <div className="col-lg-6 col-md-6">
      <div>{listRightPage}</div>
    </div>
  )
}
