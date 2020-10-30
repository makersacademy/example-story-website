import React from "react"
import { shallow } from "enzyme"
import { NavBar, NavBarItem } from "../index"
import { withQuerySnapshot } from "gatsby-plugin-testing"

describe("NavBar", () => {
  it(
    "renders the NavBar correctly",
    withQuerySnapshot(() => {
      const listLinks = ["\\"]
      const frontMatterData = [
        {
          title: "Home",
          jobTitle: "Junior Developer",
          greeting: "Hi I'm Joseph Jones",
        },
      ]
      let wrapper = shallow(
        <NavBar
          slug=""
          listLinks={listLinks}
          frontmatterData={frontMatterData}
        ></NavBar>
      )
      expect(wrapper).toHaveLength(1)
      expect(wrapper.find(NavBarItem)).toBeTruthy
    })
  )
})
