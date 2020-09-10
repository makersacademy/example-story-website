import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

interface Props {
  midLine?: boolean
  section: string
}
export const BookSection = (props: Props) => {
  const { section, index } = props
  let style
  if (index % 2 === 0) {
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
