// import "jsdom-global/register"
import React, { Component } from "react"
import { shallow, mount, render } from "enzyme"
import { DoublePage, LeftPage, SubHeading } from "../index"

describe("DoublePage", () => {
  it("is rendered with a title", () => {
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
      />
    )
    expect(wrapper).toHaveLength(1)
  })

  it("renders the LeftPage Component", () => {
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
      />
    )
    expect(wrapper.containsMatchingElement(leftPage)).toEqual(true)
  })
})
