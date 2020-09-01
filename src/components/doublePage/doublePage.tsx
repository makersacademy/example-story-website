import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { ChapterPages, BookSection, Line } from "../index"
import "./doublePage.scss"

export const DoublePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <ChapterPages />
        </div>
      </div>
    </div>
  )
}
