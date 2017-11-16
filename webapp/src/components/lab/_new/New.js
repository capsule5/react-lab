import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"

const Wrapper = styled.div`
  
`

class New extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          New
        </Wrapper>
      </Example>
    )
  }
}

New.propTypes = {
  data: PropTypes.object.isRequired,
}

export default New
