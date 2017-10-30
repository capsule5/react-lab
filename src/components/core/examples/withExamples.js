import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { selectTag } from "redux/tags"

export default (WrappedComponent) => {
  class withExamples extends Component {
    constructor(props) {
      super(props)
      this.onSelectTag = this.onSelectTag.bind(this)
      // console.log("[stab]", "example")
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
          selectedTags={ this.props.tags }
        />
      )
    }
  }

  const mapStateToProps = state => ({
    tags: state.tags.selected,
  })

  const mapDispatchToProps = dispatch => ({
    selectTag: (tag) => {
      dispatch(selectTag(tag))
    },
  })


  withExamples.propTypes = {
    selectTag: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(withExamples)
}

