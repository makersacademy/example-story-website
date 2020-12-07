// import "jsdom-global/register"
import React, { Component } from "react"
import { shallow, mount, render } from "enzyme"
import { DoublePage, LeftPage, SubHeading } from "../index"

describe("DoublePage", () => {
  it("is rendered with a title", () => {
    const next = { fields: { slug: "/next/" } }
    const previous = null
    let wrapper = shallow(
      <DoublePage
        title={"Learning"}
        leftPage={[
          {
            title: "Makers Academy",
            subTitle: "string",
            content: "string",
          },
        ]}
        rightPage={[
          {
            title: "Makers Academy",
            subTitle: "string",
            content: "string",
          },
        ]}
        next={next}
        previous={previous}
        chapter="0"
      />
    )
    expect(wrapper).toHaveLength(1)
  })

  it("renders the LeftPage Component", () => {
    const next = { fields: { slug: "/next/" } }
    const previous = null
    let leftPage = (
      <LeftPage
        leftPage={[
          { title: "Makers Academy", subTitle: "string", content: "string" },
        ]}
      />
    )

    let wrapper = shallow(
      <DoublePage
        title={"Learning"}
        leftPage={[
          {
            title: "Makers Academy",
            subTitle: "string",
            content: "string",
          },
        ]}
        rightPage={[
          {
            title: "Makers Academy",
            subTitle: "string",
            content: "string",
          },
        ]}
        next={next}
        previous={previous}
        chapter="0"
      />
    )
    expect(wrapper.containsMatchingElement(leftPage)).toEqual(true)
  })
})
