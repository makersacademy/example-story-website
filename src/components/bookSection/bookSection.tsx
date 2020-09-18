import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

interface BodyItem {
  title: string
  subTitle: string
  content: string
}

interface Props {
  bodyItem: BodyItem
  index: number
}

export const BookSection = (props: Props) => {
  const { bodyItem, index } = props
  const { title, subTitle, content } = bodyItem
  let style
  if (index % 2 === 0) {
    style = "book-mid-line"
  }

  return (
    <div className={`col-md-6 col-lg-6  ${style}`}>
      <div className="px-3 py-2">
        <div className="box">
          <h2 className="box-title px-2 my-0 py-2 ">{title}</h2>
          <h3 className="box-subtitle px-2">{subTitle}</h3>
          <p className="px-2 box-content">{content}</p>
        </div>
      </div>
    </div>
  )
}
