import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Example from "components/core/examples/example/Example"
import Child from "./Child"

class UnmountAnimation extends PureComponent {
  constructor(props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
    this.state = {
      showChild: true,
    }
  }
  buttonClick() {
    this.setState({
      showChild: !this.state.showChild,
    })
  }
  render() {
    return (
      <Example data={ this.props.data }>
        <Child onTransitionEnd={ this.transitionEnd } mounted={ this.state.showChild } />
        <button onClick={ this.buttonClick }>{this.state.showChild ? "Unmount" : "Mount"}</button>
      </Example>
    )
  }
}

UnmountAnimation.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UnmountAnimation
