import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"
import Img from "gatsby-image"

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
    backgroundImage,
    boxWidth,
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

  let width, text

  switch (boxWidth) {
    case "full":
      width = 12
      break
    case "half":
      width = 6
      break
    case "quarter":
      width = 3
      break
  }

  if (width) {
    text = "text-center"
  }

  return (
    <div className={`px-3 pb-5 col-${width}`}>
      <div className="box" style={addBackgroundImage()}>
        {picture}
        <div className={`${addTextBox()} `}>
          <h2 className={`title px-2 my-0 py-2 ${addTitleBox()} `}>{title}</h2>
          <h3 className="subtitle-box px-2">{subTitle}</h3>
          <p className={`px-2 content-box ${text}`}>{content}</p>
        </div>
      </div>
    </div>
  )
}
