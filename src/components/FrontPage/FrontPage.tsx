import React from "react"
import { Image } from "../../components/image"
import "bootstrap/dist/css/bootstrap.css"
import { FrontPageLabels } from "../index"
import { BookCoverTitle } from "./BookCoverTitle"
import { BookCoverSubTitle } from "./BookCoverSubTitle"
import { BookCoverImage } from "./bookCoverImage"

import "./FrontPage.scss"

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
