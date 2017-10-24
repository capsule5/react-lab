import React, { Component } from "react"
import styled from "styled-components"
import ExReactAnimation from "./examples/ExReactAnimation"


const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Wrapper>
        <ExReactAnimation />
      </Wrapper>
    )
  }
}

export default Examples
