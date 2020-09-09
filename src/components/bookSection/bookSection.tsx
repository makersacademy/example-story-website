import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

interface Props {
  midLine?: boolean
}
export const BookSection = (props: Props) => {
  const { midLine } = props
  let style
  if (midLine) {
    console.log("true")
    style = "book-mid-line"
  }
  return (
    <div className={`col-md-6 col-lg-6 ${style}`}>
      <div className="px-3 py-2">
        <div className="box">{section}</div>
      </div>
    </div>
  )
}
