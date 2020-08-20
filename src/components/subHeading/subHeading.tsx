import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookFrontCoverLabels } from "../index"
import "./subHeading.scss"

export const SubHeading = () => {
  return (
    <div>
      <div className="row">
        <div className="col-8 offset-2 text-center px-5 pt-4">
          <h2 className="subHeading">{BookFrontCoverLabels.intro3}</h2>
        </div>
      </div>
    </div>
  )
}
