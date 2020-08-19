import React from "react"
import { shallow } from "enzyme"
import { BookFrontCover } from "../index"

it("renders a page correctly", () => {
  let wrapper = shallow(<BookFrontCover />)
  expect(wrapper).toHaveLength(1)
})
