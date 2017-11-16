import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { selectTag, deselectTag } from "redux/tags"
import { withRouter } from "react-router-dom"
import { compose } from "utils/helpers"

export default (WrappedComponent) => {
  class withTags extends Component {
    constructor(props) {
      super(props)
      this.onSelectTag = this.onSelectTag.bind(this)
      this.onDeselectTag = this.onDeselectTag.bind(this)
    }

    onSelectTag(tag, e) {
      e.preventDefault()
      this.props.history.push("/examples/list")
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
    history: PropTypes.object.isRequired,
    selectedTags: PropTypes.array.isRequired,
    selectTag: PropTypes.func.isRequired,
    deselectTag: PropTypes.func.isRequired,
  }

  const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )
  
  return enhance(withTags)
}

