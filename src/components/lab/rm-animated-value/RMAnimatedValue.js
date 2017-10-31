import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Motion, spring } from "react-motion"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"

const Count = styled.div`
  font-size:60px;
`

class RMAnimatedValue extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Motion defaultStyle={ { x: 0 } } style={ { x: spring(10) } }>
          {value => <Count>{value.x}</Count>}
        </Motion>
      </Example>
    )
  }
}

RMAnimatedValue.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RMAnimatedValue
