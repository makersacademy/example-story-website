import React from "react"
import { shallow } from "enzyme"
import { Layout } from "./index"

it("renders a page correctly", () => {
  let wrapper = shallow(
    <Layout >
    </Layout>
  )
  expect(wrapper).toHaveLength(1)
})
