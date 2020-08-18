import React from "react"
import "./chapterPages.scss"
import "bootstrap/dist/css/bootstrap.css"

export const ChapterPages = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm px-0">
          <div id="leftPage"></div>
        </div>
        <div className="col-sm px-0">
          <div id="rightPage"></div>
        </div>
      </div>
    </div>
  )
}
