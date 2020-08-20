import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { DeveloperImage, Heading, SubHeading } from "../index"
import "./bookFrontCover.scss"

//TODO Send the BookFrontCoverLabels to heading + subheading
// Do we want to send styling down as a prop

export const BookFrontCover = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 offset-3 p-0">
          <div id="book" className="container">
            <div id="spine"></div>
            <DeveloperImage />
            <Heading />
            <SubHeading />
          </div>
        </div>
      </div>
    </div>
  )
}
