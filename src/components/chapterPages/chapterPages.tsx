import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { BookSection } from "../index"

// import "./chapterPages.scss"

export const ChapterPages = () => {
  return (
    <div>
      <div className="d-flex justify-content-center" id="double-page">
        <BookSection line={true} />
        <BookSection />
      </div>
    </div>
  )
}
