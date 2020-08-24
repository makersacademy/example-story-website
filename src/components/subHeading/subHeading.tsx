import React, { ReactNode } from "react"
import "bootstrap/dist/css/bootstrap.css"

import "./subHeading.scss"

interface Props {
  careerAim: string
}

export const SubHeading = (props: Props) => {
  const { careerAim } = props

  return (
    <div>
      <div className="row">
        <div className="col-8 offset-2 text-center px-5 pt-4">
          <h2 className="subHeading">{careerAim}</h2>
        </div>
      </div>
    </div>
  )
}
