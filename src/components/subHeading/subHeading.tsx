import React, { ReactNode } from "react"
import "bootstrap/dist/css/bootstrap.css"

import { BookFrontCoverLabels } from "../index"
import "./subHeading.scss"

interface Props {
  aim: string
}

export const SubHeading = (props: Props) => {
  const { aim } = props

  return (
    <div>
      <div className="row">
        <div className="col-8 offset-2 text-center px-5 pt-4">
          <h2 className="subHeading">{aim}</h2>
        </div>
      </div>
    </div>
  )
}
