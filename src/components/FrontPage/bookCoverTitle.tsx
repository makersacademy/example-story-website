import React from "react"
import { Image } from "../../components/image"
import "bootstrap/dist/css/bootstrap.css"
import { FrontPageLabels } from "../index"

import "./FrontPage.scss"

export const BookCoverTitle = () => {
  return (
    <div>
      <div className="row">
        <div id="title" className="col-8 offset-2 text-center">
          <h3 className="pt-1">
            {FrontPageLabels.intro1}
            <br></br>
            {FrontPageLabels.intro2}
          </h3>
        </div>
      </div>
    </div>
  )
}
