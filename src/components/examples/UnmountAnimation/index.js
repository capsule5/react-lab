import React, { PureComponent } from "react"
import Example from "../Example"
import { TAGS } from "../../../utils/tags"
import Child from "./child"

const DATA = {
  title: "Unmount Animation",
  tags: [
    TAGS.animation,
  ],
  sources: [
    "https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component",
  ],
}

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
      <Example data={ DATA }>
        <Child onTransitionEnd={ this.transitionEnd } mounted={ this.state.showChild } />
        <button onClick={ this.buttonClick }>{this.state.showChild ? "Unmount" : "Mount"}</button>
      </Example>
    )
  }
}

export default Parent
