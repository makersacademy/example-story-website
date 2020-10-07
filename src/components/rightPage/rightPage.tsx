import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookSection } from "../index"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
}

interface Props {
  rightPage?: Array<PageItem>
}

const linkArray = ["/home/", "/now/", "/start/", "/employment/", "/eureka/", "/learning/", "/projects/", "/future/", "/contact/"]

var findNextPage =  () => {
  linkArray.forEach(function(item, index) {
    if (item == location.pathname) {
      console.log("Current Location=" + location.pathname)
      console.log("item=" + item)
      console.log("index=" + index)
      const nextPage = linkArray[index + 1]
    };
  });
};

findNextPage()

export const RightPage = (props: Props) => {
  const { rightPage } = props

  if (rightPage) {
    var listRightPage = rightPage.map((pageItem: PageItem, index: number) => {
      return <BookSection key={index} pageItem={pageItem} />
    })
  } else {
    listRightPage = []
  }

  return (
    <div className="col-lg-6 col-md-6 py-5">
      <div>{listRightPage}</div>
    </div>
  )
}