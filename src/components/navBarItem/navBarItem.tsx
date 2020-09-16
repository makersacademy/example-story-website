import React from "react"
import "bootstrap/dist/css/bootstrap.css"

interface Props {
  chapter: string
}

export const NavBarItem = (props: Props) => {
  const { chapter } = props

  let link = `/${chapter}`
  if (link === "/Home") {
    link = "/"
  }

  return (
    <a className="nav-link" href={link.toLowerCase().replace(/ /g, "")}>
      <p className="navText">{chapter}</p>
    </a>
  )
}
