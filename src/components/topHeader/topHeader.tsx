import React from "react"
import "bootstrap/dist/css/bootstrap.css"

interface Props {
  greeting: string
  jobTitle: string
}

export const TopHeader = (props:Props) => {
  const { jobTitle, greeting } = props

  return (
    <div>
      <h1>{jobTitle}{greeting}</h1>
    </div>
  )
}
