import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { examplesSelector } from "./selectors"

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

  const makeMapStateToProps = () => {
    const getExamples = examplesSelector()
    const mapStateToProps = state => ({
      selectedTags: state.tags.selected,
      examples: getExamples(state),
    })
    return mapStateToProps
  }


  withExamples.propTypes = {
    selectedTags: PropTypes.array.isRequired,
    examples: PropTypes.array.isRequired,
  }
  
  return connect(makeMapStateToProps)(withExamples)
}

