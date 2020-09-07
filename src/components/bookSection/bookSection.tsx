import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

interface Props {
  midLine: boolean
  section: string
}

export const BookSection = (props: Props) => {
  const { midLine, section } = props
  let style
  if (midLine) {
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
