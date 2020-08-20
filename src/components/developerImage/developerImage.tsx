import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { Image } from "../index"
import "../bookFrontCover/bookFrontCover.scss"

export const DeveloperImage = () => {
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
