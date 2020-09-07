import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

export const BookSection = props => {
  let style
  if (props.midLine) {
    console.log("true")
    style = "book-mid-line"
  }
  return (
    <div className={`col-md-6 col-lg-6 ${style}`}>
      <div className="px-3 py-2">
        <div className="box">{props.section1}</div>
      </div>
    </div>
  )
}
