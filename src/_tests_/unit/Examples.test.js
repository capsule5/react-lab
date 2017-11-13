import React from "react"
import renderer from "react-test-renderer"
import Examples from "components/core/examples/Examples"
import withExamples from "components/core/examples//withExamples"

// props
const props = {
  availableTags: [],
  examples: [],
}

describe("<Examples />", () => {
  it("renders without crashing", () => {
    const component = renderer.create(
      withExamples(<Examples { ...props } />)
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
