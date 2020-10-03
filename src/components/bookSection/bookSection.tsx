import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

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

  function isImagePresent() {
    return image
  }

  function addTextBox() {
    if (isImagePresent()) {
      return "text-box col-lg-6 col-md-6"
    }
  }

  function addTitleBox() {
    if (!isImagePresent()) {
      return "title-box"
    }
  }

  function addBackgroundImage() {
    if (isImagePresent()) {
      const src = image.childImageSharp.fluid.src
      return {
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
  }

  return (
    <div className="px-3 pb-5">
      <div className="box" style={addBackgroundImage()}>
        <div className={`${addTextBox()} `}>
          <h2 className={`title px-2 my-0 py-2 ${addTitleBox()} `}>{title}</h2>
          <h3 className="subtitle-box px-2">{subTitle}</h3>
          <p className="px-2 content-box">{content}</p>
        </div>
      </div>
    </div>
  )
}
