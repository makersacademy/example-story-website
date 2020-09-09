import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"
import "./doublePage.scss"

interface Props {
  title: string
  section1: string
}

export const DoublePage = (props: Props) => {
  const { title, section1, section2, section3, section4 } = props
  return (
    <div className="container " id="double-page">
      <div className="row">
        <div className=" col-md-6 book-mid-line">
          <h2 className="heading ">{title}</h2>
        </div>
      </div>

      <div className="row">
        <BookSection midLine={true} section={section1} />
        <BookSection section={section3} />
      </div>

      <div className="row">
        <BookSection midLine={true} section={section2}></BookSection>
        <BookSection section={section4} />
      </div>
    </div>
  )
}
