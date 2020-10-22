import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"
import Img from "gatsby-image"
import { boxWidthConvert } from "./helper/colWidthHelper"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
  backgroundImage?: any
  boxWidth?: string
}

interface Props {
  pageItem: PageItem
}

export const BookSection = (props: Props) => {
  const { pageItem } = props

  const {
    title,
    subTitle,
    content,
    image,
    boxWidth,
    backgroundImage,
  } = pageItem

  function isBackgroundImagePresent() {
    return backgroundImage
  }

  function isAnyImagePresent() {
    if (image || backgroundImage) {
      return true
    }
  }

  function addTextBox() {
    if (isBackgroundImagePresent()) {
      return "text-box col-lg-6 col-md-6"
    }
  }

  function addTitleBox() {
    if (!isAnyImagePresent()) {
      return "title-box"
    }
  }

  function addBackgroundImage() {
    if (isBackgroundImagePresent()) {
      const src = backgroundImage.childImageSharp.fluid.src
      return {
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
  }

  let picture
  if (image) {
    picture = <Img fluid={image.childImageSharp.fluid} />
  }

  const columnWidth = boxWidthConvert(boxWidth!)

  const alignText = columnWidth ? "text-center" : ""

  return (
    <div className={`px-3 pb-5 col-${columnWidth}`}>
      <div className="box" style={addBackgroundImage()}>
        {picture}
        <div className={`${addTextBox()} `}>
          <h3 className={`title px-2 my-0 py-2 ${addTitleBox()} `}>{title}</h3>
          <h4 className="subtitle-box px-2">{subTitle}</h4>
          <p className={`px-2 content-box ${alignText}`}>{content}</p>
        </div>
      </div>
    </div>
  )
}
