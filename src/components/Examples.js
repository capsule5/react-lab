import React, { Component } from "react"
import styled from "styled-components"
import ReactMotion from "./examples/ReactMotion"

const Wrapper = styled.div``

class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Wrapper>
        <ReactMotion />
      </Wrapper>
    )
  }
}

export default Examples
