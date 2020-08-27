import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { bookFrontCover } from "../../labels"
import { DeveloperImage, Heading, SubHeading } from "../index"
import "./bookFrontCover.scss"

export const BookFrontCover = props => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 offset-3 p-0">
          <div id="book" className="container">
            <div id="spine"></div>
            <DeveloperImage />
            <Heading greeting={props.greeting} jobTitle={props.jobTitle} />
            <SubHeading careerAim={props.careerAim} />
          </div>
        </div>
      </div>
    </div>
  )
}
