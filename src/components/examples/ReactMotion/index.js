import React, { PureComponent } from "react"
import { Motion, spring } from "react-motion"
import styled from "styled-components"
import Example from "../Example"
import { TAGS } from "../../../utils/tags"

const Count = styled.div`
  font-size:60px;
`

const DATA = {
  title: "React Motion",
  tags: [
    TAGS.animation,
  ],
  sources: [
    "https://github.com/chenglou/react-motion",
    "https://react.rocks/tag/react-motion",
  ],
}

class ReactMotion extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ DATA }>
        <h3>Simple value animation</h3>
        <Motion defaultStyle={ { x: 0 } } style={ { x: spring(10) } }>
          {value => <Count>{value.x}</Count>}
        </Motion>
      </Example>
    )
  }
}

export default ReactMotion
