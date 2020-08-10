import React from "react"
import { shallow } from "enzyme"
import { FrontPage } from "../index"

it("renders a page correctly", () => {
  let wrapper = shallow(<FrontPage />)
  expect(wrapper).toHaveLength(1)
})
