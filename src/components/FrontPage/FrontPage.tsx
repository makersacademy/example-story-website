import React from "react"
import { Image } from "../../components/image"
import "bootstrap/dist/css/bootstrap.css"

import "./FrontPage.css"

const FrontPage = () => {
  return (
    <>
      <div  className="container">
          <div className="row">
            <div className="col-6 offset-3"><Image/></div>
          </div> 
          {/*Second Row*/}
          <div className="row">
            <div id="title" className="col-8 offset-2">asdfas</div>
          </div>
          <div className="row">
          <div className="col">1 of 12</div>
            <div className="col">2 of 12</div>
            <div className="col">3 of 12</div>
            <div className="col">4 of 12</div>
            <div className="col">5 of 12</div>
            <div className="col">6 of 12</div>
            <div className="col">7 of 12</div>
            <div className="col">8 of 12</div>
            <div className="col">9 of 12</div>
            <div className="col">10 of 12</div>
            <div className="col">11 of 12</div>
            <div className="col">12 of 12</div>
          </div>
          <div className="row">
          <div className="col">1 of 12</div>
            <div className="col">2 of 12</div>
            <div className="col">3 of 12</div>
            <div className="col">4 of 12</div>
            <div className="col">5 of 12</div>
            <div className="col">6 of 12</div>
            <div className="col">7 of 12</div>
            <div className="col">8 of 12</div>
            <div className="col">9 of 12</div>
            <div className="col">10 of 12</div>
            <div className="col">11 of 12</div>
            <div className="col">12 of 12</div>
          </div>
          <div className="row">
            <div className="col">1 of 12</div>
            <div className="col">2 of 12</div>
            <div className="col">3 of 12</div>
            <div className="col">4 of 12</div>
            <div className="col">5 of 12</div>
            <div className="col">6 of 12</div>
            <div className="col">7 of 12</div>
            <div className="col">8 of 12</div>
            <div className="col">9 of 12</div>
            <div className="col">10 of 12</div>
            <div className="col">11 of 12</div>
            <div className="col">12 of 12</div>
          </div>
          <div className="row">
            <div className="col">1 of 12</div>
            <div className="col">2 of 12</div>
            <div className="col">3 of 12</div>
            <div className="col">4 of 12</div>
            <div className="col">5 of 12</div>
            <div className="col">6 of 12</div>
            <div className="col">7 of 12</div>
            <div className="col">8 of 12</div>
            <div className="col">9 of 12</div>
            <div className="col">10 of 12</div>
            <div className="col">11 of 12</div>
            <div className="col">12 of 12</div>
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
