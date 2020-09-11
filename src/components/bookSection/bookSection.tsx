import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

interface Props {
  section: string
  index: number
}
export const BookSection = (props: Props) => {
  const { section, index } = props
  const { title } = section
  let style
  if (index % 2 === 0) {
    style = "book-mid-line"
  }

  return (
    <div className={`col-md-6 col-lg-6 ${style}`}>
      <div className="px-3 py-2">
        <div className="box">{title}</div>
      </div>
    </div>
  )
}
