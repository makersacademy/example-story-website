import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import "./heading.scss"

interface Props {
  greeting: string
  role: string
}

export const Heading = (props: Props) => {
  const { role, greeting } = props

  return (
    <div>
      <div className="row">
        <div id="title" className="col-8 offset-2 text-center">
          <h3 id="heading" className="pt-1 heading">
            {greeting}
            <br></br>
            {role}
          </h3>
        </div>
      </div>
    </div>
  )
}
