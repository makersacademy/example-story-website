import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "gatsby"
import { LeftPage, RightPage } from "../index"
import "./doublePage.scss"

interface PageItem {
  title?: string
  subTitle?: string
  content?: string
  image?: any
  imageWithoutText?: any
}

interface Direction {
  fields: { slug: string }
}

interface Props {
  title: string
  chapter: string
  leftPage: Array<PageItem>
  rightPage: Array<PageItem>
  next: Direction | null
  previous: Direction | null
}

export const DoublePage = (props: Props) => {
  const { title, leftPage, rightPage, previous, next } = props
  return (
    <div className="container ">
      <div className="row align-items-center">
        <div className="pager-div col-lg-1 col-md-1 ">
          {previous && (
            <Link to={previous.fields.slug}>
              <div className="pager-desktop-previous d-none d-md-block"></div>
            </Link>
          )}
        </div>
        <div id="double-page" className="col-lg-10 col-md-10">
          <div className="row">
            <LeftPage leftPage={leftPage} title={title}></LeftPage>
            <RightPage rightPage={rightPage} />
          </div>
        </div>
        <div className="pager-div col-lg-1 col-md-1 ">
          {next && (
            <Link to={next.fields.slug}>
              <div className="pager-desktop-next d-none d-md-block " />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
