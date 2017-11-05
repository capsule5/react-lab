import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

export default (WrappedComponent) => {
  class withExamples extends PureComponent {
    render() {
      return (
        <WrappedComponent
          { ...this.props }
          selectedTags={ this.props.tags }
        />
      )
    }
  }

  const mapStateToProps = state => ({
    tags: state.tags.selected,
  })

  withExamples.propTypes = {
    tags: PropTypes.array.isRequired,
  }
  
  return connect(mapStateToProps, null)(withExamples)
}

