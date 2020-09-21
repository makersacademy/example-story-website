import React from "react"
import "bootstrap/dist/css/bootstrap.css"

// import { Image } from "../index"
import "../bookFrontCover/bookFrontCover.scss"

interface Props {
  image: any
}

export const DeveloperImage = (props: Props) => {
  const { image } = props
  return (
    <div>
      <div className="row">
        <div className="col-6 offset-3 pt-5">
          <img alt="myPicture" src={image.childImageSharp.fluid.src} />
        </div>
      </div>
    </div>
  )
}
