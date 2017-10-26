import React, { Component } from "react"
import styled from "styled-components"
import ReactAnimation from "./examples/ReactAnimation"

const Wrapper = styled.div``

class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Wrapper>
        <ReactAnimation />
      </Wrapper>
    )
  }
}

export default Examples
