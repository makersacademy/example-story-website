import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"

export const RightPage = props => {
  const { rightPage } = props

  const listRightPage = rightPage.map((bodyItem: any, index: number) => {
    return <BookSection key={index} bodyItem={bodyItem}></BookSection>
  })

  return (
    <div className=" col-lg-6 col-md-6   ">
      <div>{listRightPage}</div>
    </div>
  )
}
