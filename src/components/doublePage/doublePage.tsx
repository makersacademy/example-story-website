import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { LeftPage, RightPage } from "../index"
// import { BookSection } from "../index"
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
  const { title, leftPage, rightPage } = props

  return (
    <div className="container  " id="double-page">
      <div className="row  ">
        <LeftPage leftPage={leftPage} title={title}></LeftPage>

        <RightPage rightPage={rightPage}> </RightPage>
      </div>
    </div>
  )
}
