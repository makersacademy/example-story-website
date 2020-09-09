import React from "react"
import { shallow } from "enzyme"
import { NavBarItem } from "../index"

it("renders a chapter", () => {
  let wrapper = shallow(<NavBarItem chapter="Learning" />)
  expect(wrapper.text()).toContain("Learning")
})
