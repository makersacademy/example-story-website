import React from "react"
import ReactNode from "react"
import { shallow } from "enzyme"
import { Layout } from "./index"
import { NavigationContainer } from "../index"

describe("Layout", () => {
  it("renders a page correctly", () => {
    const listLinks = ["\\"]
    const frontMatterData = [
      {
        title: "Home",
        jobTitle: "Junior Developer",
        greeting: "Hi I'm Joseph Jones",
      },
    ]

    const wrapper = shallow(
      <Layout
        slug="\"
        children=""
        listLinks={listLinks}
        frontmatterData={frontMatterData}
      ></Layout>
    )
    expect(wrapper).toHaveLength(1)
  })

  it("renders the NavigationContainer correctly", () => {
    const listLinks = ["\\"]
    const frontMatterData = [
      {
        title: "Home",
        jobTitle: "Junior Developer",
        greeting: "Hi I'm Joseph Jones",
      },
    ]
    const wrapper = shallow(
      <Layout
        slug="\"
        children=""
        listLinks={listLinks}
        frontmatterData={frontMatterData}
      ></Layout>
    )
    const navigationContainer = (
      <NavigationContainer slug="\"></NavigationContainer>
    )

    expect(wrapper.containsMatchingElement(navigationContainer)).toEqual(true)
  })
})
