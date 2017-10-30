import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Motion, spring } from "react-motion"
import styled from "styled-components"
import Example from "components/Examples/Example"

const Count = styled.div`
  font-size:60px;
`

class ReactMotion extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <h3>Simple value animation</h3>
        <Motion defaultStyle={ { x: 0 } } style={ { x: spring(10) } }>
          {value => <Count>{value.x}</Count>}
        </Motion>
      </Example>
    )
  }
}

ReactMotion.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ReactMotion
