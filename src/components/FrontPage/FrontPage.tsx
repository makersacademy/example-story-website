import React from "react"
import { Image } from "../../components/image"
import "bootstrap/dist/css/bootstrap.css"

import "./FrontPage.css"

const FrontPage = () => {
  return (
    <>
      <div id="book">
        <div className="row-2">
          <div className="container">
            <div className="row">
              <div className="col">
                <div id="spine"></div>
              </div>
              <div className="col-md p-5">
                <Image />
              </div>
              
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { FrontPage }
