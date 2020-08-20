import React from "react"
import "./doublePage.scss"
import "bootstrap/dist/css/bootstrap.css"
import { ChapterPages } from "../index"

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
