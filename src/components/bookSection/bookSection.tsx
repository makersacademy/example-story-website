import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

export const BookSection = props => {
  let customStyleRule
  if (props.line) {
    customStyleRule = { "border-right": "1px solid black" }
  }
  return (
    <div style={customStyleRule}>
      <div className=" box "></div>
    </div>
  )
}
