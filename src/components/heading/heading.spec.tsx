import React from "react"
import { shallow } from "enzyme"
import { Heading } from "../index"

describe("Heading", () => {
  it("renders a page correctly", () => {
    let wrapper = shallow(<Heading greeting="hi" jobTitle="developer" />)
    expect(wrapper).toHaveLength(1)
  })

  it("renders a greeting", () => {
    let wrapper = shallow(
      <Heading greeting="Hi, I am a test person" jobTitle="developer" />
    )
    expect(wrapper.text()).toContain("Hi, I am a test person")
  })

  it("renders a jobTitle", () => {
    let wrapper = shallow(
      <Heading greeting="Hi, I am a test person" jobTitle="I am a tester" />
    )
    expect(wrapper.text()).toContain("I am a tester")
  })
})
