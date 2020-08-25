import React from "react"
import { shallow } from "enzyme"
import { Heading } from "../index"

it("renders a page correctly", () => {
  let wrapper = shallow(<Heading greeting="hi" role="developer" />)
  expect(wrapper).toHaveLength(1)
})

it("renders a greeting", () => {
  let wrapper = shallow(
    <Heading greeting="Hi, I am a test person" role="developer" />
  )
  expect(wrapper.text()).toContain("Hi, I am a test person")
})
