import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { selectTag } from "redux/tags"

export default (WrappedComponent) => {
  class withExample extends Component {
    constructor(props) {
      super(props)
      this.onSelectTag = this.onSelectTag.bind(this)
    }

    onSelectTag(tag, e) {
      e.preventDefault()
      this.props.selectTag(tag)
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          onSelectTag={ this.onSelectTag }
        />
      )
    }
  }

  const mapDispatchToProps = dispatch => ({
    selectTag: (tag) => {
      dispatch(selectTag(tag))
    },
  })

  withExample.propTypes = {
    selectTag: PropTypes.func.isRequired,
  }
  
  return connect(null, mapDispatchToProps)(withExample)
}

