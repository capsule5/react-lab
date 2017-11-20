import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"

const Wrapper = styled.div`
  
`

class UploadImage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          UploadImage
        </Wrapper>
      </Example>
    )
  }
}

UploadImage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UploadImage
