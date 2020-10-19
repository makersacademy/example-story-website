import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./bookSection.scss"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
  boxWidth?: string
}

interface Props {
  pageItem: PageItem
}

export const BookSection = (props: Props) => {
  const { pageItem } = props
  const { title, subTitle, content, image, boxWidth } = pageItem

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

  function addBackgroundImage() {
    if (image && content) {
      const src = image.childImageSharp.fluid.src
      return {
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
  }

  if (content) {
    return (
      <div className={`px-3 pb-5 col-${width}`}>
        <div className="section-box" style={addBackgroundImage()}>
          <div className={`${image && "text-box col-lg-6 col-md-6"} `}>
            <h3 className={`title px-2 my-0 py-2 ${!image && "title-box"} `}>
              {title}
            </h3>
            <h4 className="subtitle-box px-2">{subTitle}</h4>
            <p className={`px-2 content-box ${textAlignment}`}>{content}</p>
          </div>
        </div>
      </div>
    )
  } else if (image && (title || subTitle)) {
    return (
      <div className={`px-3 pb-5 col-${width}`}>
        <div className="title-box  offset-lg-1 offset-md-1 offset-sm-1">
          <h3 className={"title px-2  py-2 "}>{title}</h3>
          <h4 className="px-2 ">{subTitle}</h4>
        </div>
        <img
          className={"bordered-picture"}
          src={image.childImageSharp.fluid.src}
        />
      </div>
    )
  } else if (image) {
    return (
      <div className="picture">
        <img src={image.childImageSharp.fluid.src} />
      </div>
    )
  }
}
