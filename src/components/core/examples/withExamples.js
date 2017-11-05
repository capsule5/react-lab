import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import mapStateToProps from "./selectors"

export default (WrappedComponent) => {
  class withExamples extends PureComponent {
    render() {
      const { selectedTags, examples } = this.props
      
      return (
        <WrappedComponent
          { ...this.props }
          selectedTags={ selectedTags }
          examples={ examples }
        />
      )
    }
  }

  withExamples.propTypes = {
    selectedTags: PropTypes.array.isRequired,
    examples: PropTypes.array.isRequired,
  }
  
  return connect(mapStateToProps)(withExamples)
}

