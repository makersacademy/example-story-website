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
    <div className={`col-md-6 col-lg-6 ${style}`}>
      <div className="px-3 py-2">
        <div className="box">
          <div className="box-title px-2 py-2"> 
            {title}
          </div>
          <div className="box-body px-2">
            {subTitle}
          </div>
            {content}
        </div>
      </div>
    </div>
  )
}
