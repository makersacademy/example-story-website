import React from "react"
import { Image } from "../../components/image"
import "bootstrap/dist/css/bootstrap.css"
import { FrontPageLabels } from "../index"

import "./FrontPage.scss"

export const BookCoverImage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6 offset-3 pt-5">
          <Image />
        </div>
      </div>
    </div>
  )
}
