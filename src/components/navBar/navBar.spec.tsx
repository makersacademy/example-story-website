import React from "react"
import { shallow } from "enzyme"
import { NavBar } from "../index"

describe("NavBar", () => {
  it("renders the NavBar correctly", () => {
    let wrapper = shallow(<NavBar></NavBar>)
    expect(wrapper).toHaveLength(1)
  })
})
