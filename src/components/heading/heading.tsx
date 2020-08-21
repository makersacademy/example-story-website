import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookFrontCoverLabels } from "../index"
import "./heading.scss"

export const Heading = props => {
  return (
    <div>
      <div className="row">
        <div id="title" className="col-8 offset-2 text-center">
          <h3 id="heading" className="pt-1 heading">
            {props.greeting}
            <br></br>
            {props.role}
          </h3>
        </div>
      </div>
    </div>
  )
}
