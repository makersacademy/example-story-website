import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

export const NavBarItem = (props: any) => {
    return (
        <a className="nav-link" href="/chapter1">
        <p className="navText">{props.chapter}</p>
      </a>
    )
}