import React from "react"
import { shallow } from "enzyme"
import { BookFrontCover } from "../index"
import { getPageQueryData } from "gatsby-plugin-testing"

describe("BookFronCover", () => {
  it("renders a page correctly", async () => {
    let wrapper = shallow(
      <BookFrontCover
        greeting={await getPageQueryData("index")}
        jobTitle={await getPageQueryData("index")}
        careerAim={await getPageQueryData("index")}
        image={await getPageQueryData("index")}
      />
    )

    expect(wrapper).toHaveLength(1)
  })
})
