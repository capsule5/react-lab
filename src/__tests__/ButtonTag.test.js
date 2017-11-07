import React from "react"
import renderer from "react-test-renderer"
import ButtonTag from "components/core/examples/ButtonTag"
import { shallow } from "enzyme"

// props
const props = {
  className: "light",
  tag: { id: "x", value: "y" },
  isSelected: "false",
  onSelectTag: () => {},
  onDeselectTag: () => {},
}
describe("<ButtonTag />", () => {
  it("renders without crashing", () => {
    const component = renderer.create(
      <ButtonTag { ...props }>#tag</ButtonTag>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it("simultates click events", () => {
    const component = shallow(
      <ButtonTag { ...props }>#{props.tag.value}</ButtonTag>
    )
    component.simulate("click")
  })
})
