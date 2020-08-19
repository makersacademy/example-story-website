import React from "react"
import { Image } from "../image"
import "bootstrap/dist/css/bootstrap.css"
import { BookFrontCoverLabels } from "../index"

import "../bookFrontCover/bookFrontCover.scss"

export const BookCoverSubTitle = () => {
  return (
    <div>
      <div className="row">
        <div className="col-8 offset-2 text-center px-5 pt-4">
          <h2>{BookFrontCoverLabels.intro3}</h2>
        </div>
      </div>
    </div>
  )
}
