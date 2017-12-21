import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import ExTween from "./ExTween"


const Wrapper = styled.div`
 
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
        </Wrapper>
      </Example>
    )
  }
}

PopMotionBasics.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PopMotionBasics
