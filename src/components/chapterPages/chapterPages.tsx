import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { BookSection } from "../index"

// import "./chapterPages.scss"

export const ChapterPages = () => {
  return (
    <div className="container" id="double-page">
      <div className="row">
        <div className=" col-md-6 px-3 py-2">
          <BookSection line={true} />
        </div>
        <div className=" col-md-6 px-3 py-2">
          <BookSection />
        </div>
      </div>
      <div className="row">
        <div className=" col-md-6 px-3 py-2">
          <BookSection />
        </div>
        <div className=" col-md-6 px-3 py-2">
          <BookSection />
        </div>
      </div>
    </div>
  )
}
