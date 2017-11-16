import React, { PureComponent } from "react"
import PropTypes from "prop-types"
// import { TransitionMotion, spring } from "react-motion"

import Example from "components/core/examples/example/Example"
import Box from "./Box"


class RMUnmountAnimation extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isMounted: !this.state.isMounted,
    })
  }
 

  render() {
    return (
      <Example data={ this.props.data } >
        <button onClick={ this.toggle }>{!this.state.isMounted ? "Unmount" : "Mount"}</button>
        <Box isMounted={ this.state.isMounted } />
      </Example>
    )
  }
}

RMUnmountAnimation.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RMUnmountAnimation
