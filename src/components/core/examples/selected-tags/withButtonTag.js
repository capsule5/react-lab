import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { deselectTag } from "redux/tags"

export default (WrappedComponent) => {
  class withExample extends Component {
    constructor(props) {
      super(props)
      this.onDeselectTag = this.onDeselectTag.bind(this)
      // console.log("[stab]", "example")
    }

    onDeselectTag(tag, e) {
      e.preventDefault()
      this.props.deselectTag(tag)
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          onDeselectTag={ this.onDeselectTag }
        />
      )
    }
  }

  const mapDispatchToProps = dispatch => ({
    deselectTag: (tag) => {
      dispatch(deselectTag(tag))
    },
  })

  withExample.propTypes = {
    deselectTag: PropTypes.func.isRequired,
  }
  
  return connect(null, mapDispatchToProps)(withExample)
}

