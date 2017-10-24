import React, { Component } from "react"
import styled from "styled-components"
import withExample from "../hoc/withExample"
import { ExampleStyle } from "./styles"

const Wrapper = styled.div` ${ExampleStyle}`

class ExReactAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Wrapper>
        Example 1
      </Wrapper>
    )
  }
}

export default withExample(ExReactAnimation)
