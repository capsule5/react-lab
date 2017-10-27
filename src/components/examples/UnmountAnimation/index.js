import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Example from "../Example"
import Child from "./child"

class Parent extends PureComponent {
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

Parent.propTypes = {
  data: PropTypes.object.isRequired,
}


export default Parent
