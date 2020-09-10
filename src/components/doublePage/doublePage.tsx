import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"
import "./doublePage.scss"

interface Props {
  title: string
  section1: string
  section2: string
  section3: string
  section4: string
  body: any
}

export const DoublePage = (props: Props) => {
  const { title, body, section1, section2, section3, section4 } = props

  return (
    <div className="container " id="double-page">
      <div className="row">
        <div className=" col-md-6 book-mid-line">
          <h2 className="heading ">{title}</h2>
        </div>
      </div>

      <div className="row">
        <BookSection midLine={true} section={body[0]} />
        <BookSection section={body[2]} />
      </div>

      <div className="row">
        <BookSection midLine={true} section={body[1]}></BookSection>
        <BookSection section={body[3]} />
      </div>
    </div>
  )
}
