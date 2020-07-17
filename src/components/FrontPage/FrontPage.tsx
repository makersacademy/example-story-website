import React from "react"
import { Image } from "../../components/image"
import "bootstrap/dist/css/bootstrap.css"

import "./FrontPage.css"

const FrontPage = () => {
  return (
    <>
      <div  className="container">
          <div className="row">
            <div className="col-6 offset-3 pt-5"><Image/></div>
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
          <div  className="col-8 offset-2 text-center px-5 pt-4"  >
            <h2>I’m looking for My first job as a full-stack developer</h2>
        
          </div>
          </div>
          
      </div>
    </>
  )
}

export { FrontPage }


 {/* <div className="container">
<div className="row">
  <div className="col">
    <div id="spine"></div>
  </div>
  <div className="col-md p-5">
    <Image />
  <div id="title"></div>
  </div>
  <div className="col"></div>
</div>
</div> */}
