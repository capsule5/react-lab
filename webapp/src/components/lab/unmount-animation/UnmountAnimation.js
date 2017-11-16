import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Example from "components/core/examples/example/Example"
import Child from "./Child"

class UnmountAnimation extends PureComponent {
  constructor(props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
    this.state = {
      isMounted: true,
    }
  }
  buttonClick() {
    this.setState({
      isMounted: !this.state.isMounted,
    })
  }
  render() {
    return (
      <Example data={ this.props.data }>
        <button onClick={ this.buttonClick }>{this.state.isMounted ? "Unmount" : "Mount"}</button>
        <Child onTransitionEnd={ this.transitionEnd } isMounted={ this.state.isMounted } />
      </Example>
    )
  }
}

UnmountAnimation.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UnmountAnimation
