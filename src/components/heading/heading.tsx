import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import { BookFrontCoverLabels } from "../index"

// import "./FrontPage.scss"

export const Heading = () => {
  return (
    <div>
      <div className="row">
        <div id="title" className="col-8 offset-2 text-center">
          <h3 className="pt-1">
            {BookFrontCoverLabels.intro1}
            <br></br>
            {BookFrontCoverLabels.intro2}
          </h3>
        </div>
      </div>
    </div>
  )
}
