import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"
import "./doublePage.scss"

interface BodyItem {
  title: string
  subTitle: string
  content: string
}

interface Props {
  title: string
  body: Array<BodyItem>
}

export const DoublePage = (props: Props) => {
  const { title, body, leftPage } = props
  console.log(leftPage)

  const listBody = body.map((bodyItem: BodyItem, index: number) => {
    return (
      <BookSection key={index} index={index} bodyItem={bodyItem}></BookSection>
    )
  })

  const listLeftPage = leftPage.map((leftPageItem: any, index: number) => {
    return (
      <div className="col-md-6 col-lg-6">
        <div className="px-3 py-2">
          <div className="box">
            <h2 className="box-title px-2 my-0 py-2 "> {leftPageItem.title}</h2>
            <h3 className="box-subtitle px-2">{leftPageItem.subTitle}</h3>
            <p className="px-2 box-content">{leftPageItem.content}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="container " id="double-page">
      <div className="row">
        <div className=" col-md-6 book-mid-line ">
          <h2 className="heading px-3 py-3 ">{title}</h2>
        </div>

        <div className="left-page ">
          {/* <div>{listBody}</div> */}
          {listLeftPage}
        </div>

        <div className="right-page ">{/* <div>{listBody}</div> */}</div>
      </div>
    </div>
  )
}
