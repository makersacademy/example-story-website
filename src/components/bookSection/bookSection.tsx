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

  function addBackgroundImage() {
    if (backgroundImage) {
      const src = backgroundImage.childImageSharp.fluid.src
      return {
        backgroundImage: `url(${src})`,
      }
    }
  }

  interface GridConversion {
    quarter: number
    half: number
    full: number
    [index: string]: number
  }

  const gridConversions: GridConversion = {
    quarter: 3,
    half: 6,
    full: 12,
  }

  let textAlignment

  const width = boxWidth && gridConversions[boxWidth]
  // utitlity function
  //const width = calculateWidth(box_width)

  //? This could be moved to the render

  return (
    <div className={`px-3 pb-5 col-${width}`}>
      <div className="section-box" style={addBackgroundImage()}>
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

//  background image - with no text
