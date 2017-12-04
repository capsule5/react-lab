import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { compose, curry, pick, prop } from "ramda"
import { validate } from "spected"
import revalidation from "./Revalidation"
import Form from "./BasicForm"


const isNotEmpty = a => a.trim().length > 0
const hasCapitalLetter = a => /[A-Z]/.test(a)
const isGreaterThan = curry((len, a) => (a > len))
const isLengthGreaterThan = len => compose(isGreaterThan(len), prop("length"))

const basicValidationRules = {
  name: [
    [ isNotEmpty, "Name should not be  empty." ],
    [ isLengthGreaterThan(7), "Minimum Random length of 8 is required." ],
  ],
  random: [
    [ isLengthGreaterThan(7), "Minimum Random length of 8 is required." ],
    [ hasCapitalLetter, "Random should contain at least one uppercase letter." ],
  ],
}

const validateFn = validate(() => [], a => a)
const SimpleForm = revalidation(
  {
    validate: {
      all: data =>
        validateFn(basicValidationRules, data),
      input: (name, value) =>
        validateFn(pick([ name ], basicValidationRules), { [name]: value }),
    },
  }
)(Form)

const Wrapper = styled.div`
  .errorPlaceholder{
    .error{
      color:violet;
      font-size:10px;
    }
  }
`

class FormValidationHoc extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { form: { name: "", random: "" } }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    console.log("Result: ", values)
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <SimpleForm
            values={ { random: "", name: "" } }
            submitCb={ this.onSubmit }
          />
        </Wrapper>
      </Example>
    )
  }
}

FormValidationHoc.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FormValidationHoc
