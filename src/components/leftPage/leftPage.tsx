import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import "./leftPage.scss"
import { BookSection } from "../index"

export const LeftPage = props => {
  const { leftPage, title } = props

  const listLeftPage = leftPage.map((bodyItem: any, index: number) => {
    {
      return <BookSection key={index} bodyItem={bodyItem}></BookSection>
    }
  })

  return (
    <div className=" col-lg-6 col-md-6  ">
      <h2 className="heading px-3 py-3 ">{title}</h2>
      <div>{listLeftPage}</div>
    </div>
  )
}
