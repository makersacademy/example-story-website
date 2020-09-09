import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { DeveloperImage, Heading, SubHeading } from "../index"
import "./bookFrontCover.scss"

interface Props {
  greeting: string
  jobTitle: string
  careerAim: string
}

export const BookFrontCover = (props: Props) => {
  const { greeting, jobTitle, careerAim } = props
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 offset-3 p-0">
          <div id="book" className="container">
            <div id="spine"></div>
            <DeveloperImage />
            <Heading greeting={greeting} jobTitle={jobTitle} />
            <SubHeading careerAim={careerAim} />
          </div>
        </div>
      </div>
    </div>
  )
}
