import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Heading } from "../index"
import { BookCoverSubTitle } from "../index"
import { DeveloperImage } from "../index"

import "./bookFrontCover.scss"

export const BookFrontCover = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-10 offset-1 p-0">
          <div id="book" className="container">
            <div id="spine"></div>
            <DeveloperImage />
            <Heading />
            <BookCoverSubTitle />
          </div>
        </div>
      </div>
    </div>
  )
}
