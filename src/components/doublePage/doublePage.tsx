import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"
import "./doublePage.scss"

interface Props {
  title: string
  section1: string
}

export const DoublePage = (props: Props) => {
  const { title, section1 } = props
  return (
    <div className="container " id="double-page">
      <div className="row">
        <div className=" col-md-6 book-mid-line">
          <h2 className="heading ">{title}</h2>
        </div>
      </div>

      <div className="row">
        <BookSection midLine={true} section1={section1} />
        <BookSection />
      </div>

      <div className="row">
        <BookSection midLine={true}></BookSection>
        <BookSection />
      </div>
    </div>
  )
}
