import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./chapterPages.scss"

export const RightPage = () => {
  return (
    <div id="rightPage">
      <div>
        <div className="row">
          <div className="col-lg-5 px-0">
            <div id="greyBox"></div>
          </div>
          <div className="col-lg-4 px-0">
            <div id="whiteBox"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
