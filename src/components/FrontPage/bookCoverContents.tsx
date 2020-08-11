import React from "react"
import { Image } from "../../components/image"
import "bootstrap/dist/css/bootstrap.css"
import { FrontPageLabels } from "../index"

import "./FrontPage.scss"

export const BookCoverContents = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6 offset-3 pt-5">
          <Image />
        </div>
      </div>

      <div className="row">
        <div id="title" className="col-8 offset-2 text-center">
          <h3 className="pt-1">
            {FrontPageLabels.intro1}
            <br></br>
            {FrontPageLabels.intro2}
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2 text-center px-5 pt-4">
          <h2>{FrontPageLabels.intro3}</h2>
        </div>
      </div>
    </div>
  )
}
