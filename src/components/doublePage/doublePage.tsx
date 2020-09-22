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
  const { title, body, leftPage, rightPage } = props
  console.log(rightPage)

  // const listBody = body.map((bodyItem: BodyItem, index: number) => {
  //   return (
  //     <BookSection key={index} index={index} bodyItem={bodyItem}></BookSection>
  //   )
  // })

  // const listLeftPage = leftPage.map((leftPageItem: any, index: number) => {
  //   return (
  //     <LeftPage
  //       key={index}
  //       index={index}
  //       leftPageItem={leftPageItem}
  //     ></LeftPage>
  //   )
  // })

  // const listRightPage = rightPage.map((rightPageItem: any, index: number) => {
  //   return (
  //     <RightPage
  //       key={index}
  //       index={index}
  //       rightPageItem={rightPageItem}
  //     ></RightPage>
  //   )
  // })

  return (
    <div className="container  " id="double-page">
      <div className="row  ">
        <LeftPage leftPage={leftPage}></LeftPage>

        <RightPage rightPage={rightPage}> </RightPage>
      </div>
    </div>
  )
}
