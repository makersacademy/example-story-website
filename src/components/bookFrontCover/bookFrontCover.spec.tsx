import React from "react"
import { shallow } from "enzyme"
import { BookFrontCover, Heading, SubHeading } from "../index"
import { getPageQueryData, withQuerySnapshot } from "gatsby-plugin-testing"

describe("BookFrontCover", () => {
  it(
    "renders a page correctly",
    withQuerySnapshot(async () => {
      const next = { fields: { slug: "/next/" } }
      let wrapper = shallow(
        <BookFrontCover
          greeting={await getPageQueryData("index")}
          jobTitle={await getPageQueryData("index")}
          careerAim={await getPageQueryData("index")}
          image={await getPageQueryData("index")}
          next={next}
        />
      )

      expect(wrapper).toHaveLength(1)
    })
  )

  it("renders the Heading correctly", () => {
    const next = { fields: { slug: "/next/" } }
    let heading = <Heading greeting="hello" jobTitle="developer" />
    let wrapper = shallow(
      <BookFrontCover
        greeting="hello"
        jobTitle="developer"
        careerAim="data ops engineer"
        image=""
        next={next}
      />
    )
    expect(wrapper.containsMatchingElement(heading)).toEqual(true)
  })

  it("renders the sub Heading correctly", () => {
    const next = { fields: { slug: "/next/" } }
    let subHeading = <SubHeading careerAim="data ops engineer" />
    let wrapper = shallow(
      <BookFrontCover
        greeting="hello"
        jobTitle="developer"
        careerAim="data ops engineer"
        image=""
        next={next}
      />
    )
    expect(wrapper.containsMatchingElement(subHeading)).toEqual(true)
  })
})
