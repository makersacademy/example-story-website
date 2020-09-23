import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"

interface BodyItem {
  title?: string
  subTitle?: string
  content?: string
}

interface Props {
  title: string
  leftPage: Array<BodyItem>
}

export const LeftPage = (props: Props) => {
  const { leftPage, title } = props

  const listLeftPage = leftPage.map((bodyItem: any, index: number) => {
    {
      return <BookSection key={index} bodyItem={bodyItem} />
    }
  })

  return (
    <div className=" col-lg-6 col-md-6 mid-line  ">
      <h2 className="heading px-3 py-3 ">{title}</h2>
      <div>{listLeftPage}</div>
    </div>
  )
}
