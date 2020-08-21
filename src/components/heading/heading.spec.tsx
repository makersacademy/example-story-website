import React from "react"
import { shallow } from "enzyme"
import { Heading } from "../index"

it("renders a page correctly", () => {
  let wrapper = shallow(
    <Heading greeting="hi" role="developer">
      <div></div>
    </Heading>
  )
  expect(wrapper).toHaveLength(1)
})
