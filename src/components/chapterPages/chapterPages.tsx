import React from "react"
import "./chapterPages.scss"
import "bootstrap/dist/css/bootstrap.css"
import { RightPage } from "../index"
import { LeftPage } from "../index"
export const ChapterPages = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm px-0">
          <LeftPage />
        </div>

        <div className="col-sm px-0">
          <RightPage />
        </div>
      </div>
    </div>
  )
}
