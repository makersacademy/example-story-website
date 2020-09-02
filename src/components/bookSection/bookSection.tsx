import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

export const BookSection = props => {
  let customStyleRule
  if (props.line) {
    customStyleRule = { "border-right": "1px solid black" }
  }
  return (
    <div className=" col-md-6 px-4 py-4 x " style={customStyleRule}>
      <div className="box py-3"></div>
    </div>
  )
}
