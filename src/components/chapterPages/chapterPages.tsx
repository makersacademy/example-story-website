import React from "react"
import "./chapterPages.scss"
import "bootstrap/dist/css/bootstrap.css"

export const ChapterPages = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div id="leftPage" className="container"></div>
        </div>
        <div className="col-sm">
          <div id="rightPage" className="container"></div>
        </div>
      </div>
    </div>
  )
}
