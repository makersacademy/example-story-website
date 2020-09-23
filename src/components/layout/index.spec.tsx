import React from "react"
import ReactNode from "react"
import { shallow } from "enzyme"
import { Layout } from "./index"
import { NavBar } from "../index"

describe("Layout", () => {
  it("renders a page correctly", () => {
    let wrapper = shallow(<Layout></Layout>)
    expect(wrapper).toHaveLength(1)
  })

  it("renders the NavBar correctly", () => {
    let wrapper = shallow(<Layout></Layout>)
    let navBar = <NavBar></NavBar>
    expect(wrapper.containsMatchingElement(navBar)).toEqual(true)
  })
})
