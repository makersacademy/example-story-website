import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { ChapterPages, BookSection } from "../index"
import "./doublePage.scss"

export const DoublePage = () => {
  return (
    <div className="container " id="double-page">
      {/* row 1 */}
      <div className="row">
        <div className=" col-md-6 book-mid-line  ">
          <h2 className="heading ">Chapter 2: Test chapter</h2>
        </div>
      </div>

      {/* row 2 */}
      <div className="row">
        <div className=" col-md-6 ">
          <BookSection line={true} />
        </div>
        <div className=" col-md-6 ">
          <BookSection />
        </div>
      </div>
      {/* row 3 */}
      <div className="row">
        <div className=" col-md-6 ">
          <BookSection line={true} />
        </div>
        <div className=" col-md-6 ">
          <BookSection />
        </div>
      </div>
    </div>
  )
}
