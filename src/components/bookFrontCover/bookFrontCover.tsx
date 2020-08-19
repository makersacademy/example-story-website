import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { BookCoverTitle } from "../index"
import { BookCoverSubTitle } from "../index"
import { BookCoverImage } from "../index"

import "./bookFrontCover.scss"

export const FrontPage = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-10 offset-1 p-0">
          <div id="book" className="container">
            <div id="spine"></div>
            <BookCoverImage />
            <BookCoverTitle />
            <BookCoverSubTitle />
          </div>
        </div>
      </div>
    </div>
  )
}
