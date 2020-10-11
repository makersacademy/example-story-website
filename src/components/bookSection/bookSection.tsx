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

  let width

  let textAlignment
  if (boxWidth == "quarter" && boxWidth) {
    width = 3
    textAlignment = "text-center"
  } else if (boxWidth == "half" && boxWidth) {
    width = 6
    textAlignment = "text-center"
  } else if (boxWidth == "full" && boxWidth) {
    width = 12
    textAlignment = "text-center"
  }

  return (
    <div className={`px-3 pb-5 col-${width}`}>
      <div className="box" style={addBackgroundImage()}>
        {image && <Img fluid={image.childImageSharp.fluid} />}
        <div className={`${backgroundImage && "text-box col-lg-6 col-md-6"} `}>
          <h3
            className={`title px-2 my-0 py-2 ${
              !(image || backgroundImage) && "title-box"
            } `}
          >
            {title}
          </h3>
          <h4 className="subtitle-box px-2">{subTitle}</h4>
          <p className={`px-2 content-box ${textAlignment}`}>{content}</p>
        </div>
      </div>
    </div>
  )
}
