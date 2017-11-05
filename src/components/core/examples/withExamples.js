import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { EXAMPLES } from "api/examples"

export default (WrappedComponent) => {
  class withExamples extends PureComponent {
    render() {
      const { selectedTags } = this.props
      const examples = selectedTags.length > 0 ?
        EXAMPLES.filter(e => (selectedTags.map(t => t.value).every(t => e.tags.map(ta => ta.value).includes(t)))) :
        EXAMPLES

      return (
        <WrappedComponent
          { ...this.props }
          selectedTags={ selectedTags }
          examples={ examples }
        />
      )
    }
  }

  const mapStateToProps = state => ({
    selectedTags: state.tags.selected,
  })

  withExamples.propTypes = {
    selectedTags: PropTypes.array.isRequired,
  }
  
  return connect(mapStateToProps, null)(withExamples)
}

