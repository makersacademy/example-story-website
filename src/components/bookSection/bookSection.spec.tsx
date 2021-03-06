import React from "react"
import { shallow } from "enzyme"
import { BookSection } from "../index"

describe("BookSection", () => {
  it("renders a page correctly", () => {
    const index = 1
    const wrapper = shallow(
      <BookSection
        pageItem={{ title: "Learning", subTitle: "", content: "", image: "" }}
      />
    )
    expect(wrapper).toHaveLength(1)
  })

  it("renders a title correctly", () => {
    const wrapper = shallow(
      <BookSection
        pageItem={{ title: "Learning", subTitle: "", content: "", image: "" }}
      />
    )
    expect(wrapper.text()).toContain("Learning")
  })
})
