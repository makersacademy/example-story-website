import React from "react"
import { Image } from "../../components/image"
import "bootstrap/dist/css/bootstrap.css"

import "./FrontPage.css"

const FrontPage = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 offset-1 p-0">
            <div id="book" className="container">
              <div id="spine"></div>
              <div className="row">
                <div className="col-6 offset-3 pt-5">
                  <Image />
                </div>
              </div>
              {/*Second Row*/}
              <div className="row">
                <div id="title" className="col-8 offset-2 text-center">
                  <h3 className="pt-1">
                    I'm Joe Blogs
                    <br></br>
                    I'm a Developer
                  </h3>
                </div>
              </div>
              {/*Third Row*/}
              <div className="row">
                <div className="col-8 offset-2 text-center px-5 pt-4">
                  <h2>
                    I’m looking for My first job as a full-stack developer
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 p-0" style={{ color: "red" }}>
            <div className="triangle">
              <h4>
                Chapter <br></br> 1
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { FrontPage }
