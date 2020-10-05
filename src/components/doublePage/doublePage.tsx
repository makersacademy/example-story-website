import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { LeftPage, RightPage } from "../index"
import "./doublePage.scss"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
  imageWithoutText?: any
}

interface Props {
  title: string
  leftPage: Array<PageItem>
  rightPage: Array<PageItem>
}

export const DoublePage = (props: Props) => {
  const { title, leftPage, rightPage } = props

  return (
    <div className="container d-flex justify-content-around" id="double-page">
      <div className="triangle-right"></div>
      <div className="row ">
        <LeftPage leftPage={leftPage} title={title}></LeftPage>
        <RightPage rightPage={rightPage} />
      </div>
    </div>
  )
}
