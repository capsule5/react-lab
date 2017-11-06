import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { selectTag, deselectTag } from "redux/tags"

export default (WrappedComponent) => {
  class withTags extends Component {
    constructor(props) {
      super(props)
      this.onSelectTag = this.onSelectTag.bind(this)
      this.onDeselectTag = this.onDeselectTag.bind(this)
    }

    onSelectTag(tag, e) {
      e.preventDefault()
      this.props.selectTag(tag)
    }

    onDeselectTag(tag, e) {
      e.preventDefault()
      this.props.deselectTag(tag)
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          selectedTags={ this.props.selectedTags }
          onSelectTag={ this.onSelectTag }
          onDeselectTag={ this.onDeselectTag }
        />
      )
    }
  }

  const mapStateToProps = state => ({
    selectedTags: state.tags.selected,
  })

  const mapDispatchToProps = dispatch => ({
    selectTag: (tag) => {
      dispatch(selectTag(tag))
    },
    deselectTag: (tag) => {
      dispatch(deselectTag(tag))
    },
  })

  withTags.propTypes = {
    selectedTags: PropTypes.array.isRequired,
    selectTag: PropTypes.func.isRequired,
    deselectTag: PropTypes.func.isRequired,
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(withTags)
}

