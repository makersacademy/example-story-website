import React from "react"
import { SEO } from "../components"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="d-flex align-items-center flex-column">
      <h1>NOT FOUND</h1>
      <img
        src="https://www.ikea.com/gb/en/images/products/billy-bookcase-white__0625599_PE692385_S5.JPG?f=xl "
        style={{ maxWidth: "40%" }}
        alt="bookcase_404"
      />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </>
)

export default NotFoundPage
