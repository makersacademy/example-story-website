import React, { Component } from "react"
import { shallow, mount, render } from "enzyme"
import { Pagers, PreviousPageLink, NextPageLink } from "../index"

describe("Pagers", () => {
  it("if previous page prop is null it only renders next", () => {
    const next = { fields: { slug: "/next/" } }
    const previous = null
    const nextPage = <NextPageLink nextLink="/next/" />
    const prevPage = <PreviousPageLink previousLink="/previous/" />
    const wrapper = shallow(<Pagers next={next} previous={previous} />)
    expect(wrapper.containsMatchingElement(nextPage)).toEqual(true)
    expect(wrapper.containsMatchingElement(prevPage)).toEqual(false)
  })

  it("if next page prop is null it only renders previous", () => {
    const next = null
    const previous = { fields: { slug: "/previous/" } }
    const nextPage = <NextPageLink nextLink="/next/" />
    const prevPage = <PreviousPageLink previousLink="/previous/" />
    const wrapper = shallow(<Pagers next={next} previous={previous} />)
    expect(wrapper.containsMatchingElement(nextPage)).toEqual(false)
    expect(wrapper.containsMatchingElement(prevPage)).toEqual(true)
  })
  it("if next & previous page props are null it doesn't renders pagelinks", () => {
    const next = null
    const previous = null
    const nextPage = <NextPageLink nextLink="/next/" />
    const prevPage = <PreviousPageLink previousLink="/previous/" />
    const wrapper = shallow(<Pagers next={next} previous={previous} />)
    expect(wrapper.containsMatchingElement(nextPage)).toEqual(false)
    expect(wrapper.containsMatchingElement(prevPage)).toEqual(false)
  })

  it("if next & previous page props are defined it renders both", () => {
    const next = { fields: { slug: "/next/" } }
    const previous = { fields: { slug: "/previous/" } }
    const nextPage = <NextPageLink nextLink="/next/" />
    const prevPage = <PreviousPageLink previousLink="/previous/" />
    const wrapper = shallow(<Pagers next={next} previous={previous} />)
    expect(wrapper.containsMatchingElement(nextPage)).toEqual(true)
    expect(wrapper.containsMatchingElement(prevPage)).toEqual(true)
  })
})
