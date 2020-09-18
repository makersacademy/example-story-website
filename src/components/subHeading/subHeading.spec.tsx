import React from "react"
import { shallow } from "enzyme"
import { SubHeading } from "../index"

describe("SubHeading", () => {
  it("renders a page correctly", () => {
    let wrapper = shallow(<SubHeading careerAim="Super developer"></SubHeading>)
    expect(wrapper).toHaveLength(1)
  })

  it("renders a careerAim", () => {
    let wrapper = shallow(
      <SubHeading careerAim="I would like to be a full-stack tester" />
    )
    expect(wrapper.text()).toContain("I would like to be a full-stack tester")
  })
})
