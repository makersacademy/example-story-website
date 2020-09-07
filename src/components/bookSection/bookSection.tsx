import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

interface Props {
  midLine: boolean
  section1: string
}

export const BookSection = (props: Props) => {
  const { midLine, section1 } = props
  let style
  if (midLine) {
    style = "book-mid-line"
  }
  return (
    <div className={`col-md-6 col-lg-6 ${style}`}>
      <div className="px-3 py-2">
        <div className="box">{section1}</div>
      </div>
    </div>
  )
}
