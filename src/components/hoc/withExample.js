import React, { Component } from "react"


export default (WrappedComponent) => {
  class withExample extends Component {
    constructor(props) {
      super(props)

      console.log("[stab]", "example")
    }

    render() {
      return (
        <WrappedComponent />
      )
    }
  }

  return withExample
}
