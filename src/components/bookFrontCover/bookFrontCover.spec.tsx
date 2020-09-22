import React from "react"
import { shallow } from "enzyme"
import { BookFrontCover } from "../index"
import { getPageQueryData, withQuerySnapshot } from "gatsby-plugin-testing"

describe("BookFrontCover", () => {
  it(
    "renders a page correctly",
    withQuerySnapshot(async () => {
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
  )
})
