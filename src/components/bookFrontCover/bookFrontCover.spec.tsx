import React from "react"
import { shallow } from "enzyme"
import { BookFrontCover } from "../index"

describe("BookFronCover", () => {
  it("renders a page correctly", () => {
    let wrapper = shallow(
      <BookFrontCover
        greeting="hello"
        jobTitle="developer"
        careerAim="data ops engineer"
        image
      />
    )
    expect(wrapper).toHaveLength(1)
  })
})
