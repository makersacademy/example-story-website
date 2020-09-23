import React from "react"
import { shallow } from "enzyme"
import { NavBar, NavBarItem } from "../index"
import { withQuerySnapshot } from "gatsby-plugin-testing"

describe("NavBar", () => {
  it(
    "renders the NavBar correctly",
    withQuerySnapshot(() => {
      let wrapper = shallow(<NavBar></NavBar>)
      expect(wrapper).toHaveLength(1)
    })
  )

  xit("renders the NavBarItem correctly", () => {
    let navBarItem = <NavBarItem chapterTitle="Home" chapterLink="" />
    let wrapper = shallow(<NavBar></NavBar>)
    expect(wrapper.containsMatchingElement(navBarItem)).toEqual(true)
  })
})
