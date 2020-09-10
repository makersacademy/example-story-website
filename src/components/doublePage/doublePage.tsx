import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"
import "./doublePage.scss"

interface Props {
  title: string
  body: any
}

export const DoublePage = (props: Props) => {
  const { title, body } = props
  const listBody = body.map((section, index) => {
    return (
      <BookSection key={index} index={index} section={section}></BookSection>
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
