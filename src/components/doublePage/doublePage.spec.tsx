// import "jsdom-global/register"
import React, { Component } from "react"
import { shallow, mount, render } from "enzyme"
import { DoublePage, BookSection, SubHeading } from "../index"

describe("DoublePage", () => {
  it("renders a double page correctly", () => {
    let wrapper = shallow(
      <DoublePage
        title={"Learning"}
        body={[
          {
            title: "Makers Academy",
            subTitle: "string",
            content: "string",
            image: "any",
          },
        ]}
      />
    )
    expect(wrapper).toHaveLength(1)
  })

  it("is rendered with a title", () => {
    let wrapper = shallow(
      <DoublePage
        title={"Learning"}
        body={[
          {
            title: "Makers Academy",
            subTitle: "string",
            content: "string",
            image: "any",
          },
        ]}
      />
    )
    expect(wrapper.text()).toContain("Learning")
  })

  it("renders the BookSection Component and passes down title from body", () => {
    let bookSection = (
      <BookSection
        index={0}
        bodyItem={{
          title: "Makers Academy",
          subTitle: "string",
          content: "string",
          image: "any",
        }}
      />
    )

    let wrapper = shallow(
      <DoublePage
        title={"Title of Chapter"}
        body={[
          {
            title: "Makers Academy",
            subTitle: "string",
            content: "string",
            image: "any",
          },
        ]}
      />
    )
    expect(wrapper.containsMatchingElement(bookSection)).toEqual(true)
  })
})
