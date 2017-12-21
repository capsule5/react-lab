import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import ExTween from "./ExTween"
import ExDragPhysics from "./ExDragPhysics"
import ExFrames from "./ExFrames"

const Wrapper = styled.div`
hr{
  height: 1px;
  border: 0;
  background-color: #EEE;
}
`

class PopMotionBasics extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <ExTween />
          <hr />
          <ExDragPhysics />
          <hr />
          <ExFrames />
        </Wrapper>
      </Example>
    )
  }
}

PopMotionBasics.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PopMotionBasics
