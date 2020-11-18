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
    <div className="container ">
      <div className="row align-items-center">
        <div className="col-lg-1 ">
          <div className="pager-desktop-previous "></div>
        </div>
        <div id="double-page" className="col-lg-10">
          <div className="row">
            <LeftPage leftPage={leftPage} title={title}></LeftPage>
            <RightPage rightPage={rightPage} />
          </div>
        </div>
        <div className="col-lg-1">
          <div className="pager-desktop-next" />
        </div>
      </div>
    </div>
  )
}
