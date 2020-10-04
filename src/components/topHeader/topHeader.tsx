import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./topHeader.scss"

interface Props {
  greeting: string
  jobTitle: string
}

export const TopHeader = (props: Props) => {
  const { jobTitle, greeting } = props

  return (
    <div>
      <h1>{greeting}</h1>
      <h2>{jobTitle}</h2>
    </div>
  )
}
