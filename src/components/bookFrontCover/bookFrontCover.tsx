import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { DeveloperImage, Heading, SubHeading } from "../index"
import "./bookFrontCover.scss"
import { Link } from "gatsby"

interface Direction {
  fields: { slug: string }
}

interface Props {
  greeting: string
  jobTitle: string
  careerAim: string
  image: any
  next: Direction | null
}

export const BookFrontCover = (props: Props) => {
  const { greeting, jobTitle, careerAim, image, next } = props
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 offset-3 p-0">
          <div id="book" className="container py-3">
            <div className="spine ">
              <DeveloperImage image={image} />
              <Heading greeting={greeting} jobTitle={jobTitle} />
              <SubHeading careerAim={careerAim} />
            </div>
          </div>
        </div>
        {next && (
          <Link to={next.fields.slug}>
            <div className="pager-desktop-next d-none d-md-block " />
          </Link>
        )}
      </div>
    </div>
  )
}
