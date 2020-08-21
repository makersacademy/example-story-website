import React from "react"
import { shallow } from "enzyme"
import { SubHeading } from "../index"

it("renders a page correctly", () => {
  let wrapper = shallow(
    <SubHeading aim="">
      <div></div>
    </SubHeading>
  )
  expect(wrapper).toHaveLength(1)
})
