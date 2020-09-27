import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"
import Img from "gatsby-image"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
}

interface Props {
  pageItem: PageItem
}

export const BookSection = (props: Props) => {
  const { pageItem } = props
  const { title, subTitle, content, image } = pageItem

  let picture

  if (image) {
    picture = <Img fluid={image.childImageSharp.fluid} />
  }

  return (
    <div className="px-3 py-2">
      <div className="box">
        <h2 className="box-title px-2 my-0 py-2 ">{title}</h2>
        <h3 className="box-subtitle px-2">{subTitle}</h3>
        <p className="px-2 box-content">{content}</p>
        {picture}
      </div>
    </div>
  )
}
