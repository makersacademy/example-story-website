import React from "react"
import { shallow } from "enzyme"
import { NavBar, NavBarItem } from "../index"
import { withQuerySnapshot } from "gatsby-plugin-testing"

describe("NavBar", () => {
  it(
    "renders the NavBar correctly",
    withQuerySnapshot(() => {
      let wrapper = shallow(<NavBar pathName="" layoutData={{allMarkdownRemark: { edges: ["",""]}}}></NavBar>)
      expect(wrapper).toHaveLength(1)
      expect(wrapper.find(NavBarItem)).toBeTruthy
    })
  )
})
