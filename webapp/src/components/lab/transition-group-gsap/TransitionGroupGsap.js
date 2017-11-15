import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Example from "components/core/examples/example/Example"

import Container from "./Container"
import AnimatedGrid from "./AnimatedGrid"
import "./index.css"

class TransitionGroupGsap extends PureComponent {
  render() {
    return (
      <Example data={ this.props.data }>
        <Container>
          <AnimatedGrid />
        </Container>
      </Example>
    )
  }
}

TransitionGroupGsap.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TransitionGroupGsap
