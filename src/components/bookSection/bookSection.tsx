import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"
import Img from "gatsby-image"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
  imageWithoutText?: any
}

interface Props {
  pageItem: PageItem
}

export const BookSection = (props: Props) => {
  const { pageItem } = props
  const { title, subTitle, content, image, backgroundImage } = pageItem

  console.log(backgroundImage)
  function isImagePresent() {
    return backgroundImage
  }

  function addTextBox() {
    if (isImagePresent()) {
      return "text-box col-lg-6 col-md-6"
    }
  }

  function addTitleBox() {
    if (!isImagePresent() && !image) {
      return "title-box"
    }
  }

  function addBackgroundImage() {
    if (isImagePresent()) {
      const src = backgroundImage.childImageSharp.fluid.src
      return {
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
  }

  function addTitle() {
    if (title) {
      return "title"
    }
  }

  let picture
  if (image) {
    picture = <Img fluid={image.childImageSharp.fluid} />
  }

  return (
    <div className="px-3 pb-5">
      <div className="box" style={addBackgroundImage()}>
        {picture}
        <div className={`${addTextBox()} `}>
          <h2 className={`title px-2 my-0 py-2 ${addTitleBox()} `}>{title}</h2>
          <h3 className="subtitle-box px-2">{subTitle}</h3>
          <p className="px-2 content-box">{content}</p>
        </div>
      </div>
    </div>
  )
}
