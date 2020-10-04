import React from "react"
import { shallow } from "enzyme"
import { NavBarItem } from "../index"

describe("NavBarItem", () => {
  it("renders a chapter", () => {
    let wrapper = shallow(
      <NavBarItem chapterTitle="Learning" chapterLink="/learning/" />
    )
    expect(wrapper.containsMatchingElement(<>Learning</>))
  });
});
