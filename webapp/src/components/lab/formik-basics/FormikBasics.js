import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import EnhancedForm from "./EnhancedForm"

const Wrapper = styled.div`
  input.error {
    border-color: violet;
  }

  .input-feedback {
    color: violet;
    margin-top: .25rem;
    font-size:10px;
  }
`

class FormikBasics extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <EnhancedForm />
        </Wrapper>
      </Example>
    )
  }
}

FormikBasics.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FormikBasics
