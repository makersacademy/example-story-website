import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"
import "./doublePage.scss"

interface BodyItem {
  title: string
  subTitle: string
  content: string
}

interface Props {
  title: string
  body: Array<BodyItem>
}

export const DoublePage = (props: Props) => {
  const { title, body } = props

  const listBody = body.map((bodyItem: BodyItem, index: number) => {
    return (
      <BookSection key={index} index={index} bodyItem={bodyItem}></BookSection>
    )
  })

  return (
    <div className="container " id="double-page">
      <div className="row">
        <div className=" col-md-6 book-mid-line">
          <h2 className="heading px-3 py-3 "> {title}</h2>
        </div>
      </div>
      <div className="row">{listBody}</div>
    </div>
  )
}
