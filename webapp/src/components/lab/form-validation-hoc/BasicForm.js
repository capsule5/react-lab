/* eslint-disable no-unused-vars */
import React from "react"
import { compose, head } from "ramda"
import { isValid } from "./Revalidation"

const createErrorMessage =
  errorMsgs => (isValid(errorMsgs) ? null : <div className="error">{head(errorMsgs)}</div>)

const Form = ({
  form,
  onChange,
  updateAndValidate,
  validate,
  valid,
  errors = {},
  onSubmit,
  submitCb,
}) =>
  (
    <div className="form">
      <div className="formGroup">
        <label htmlFor="name"><span>Name</span></label>
        <input
          id="name"
          name="name"
          type="text"
          className={ isValid(errors.name) ? "" : "error" }
          value={ form.name }
          onChange={ updateAndValidate }
        />
        <div className="errorPlaceholder">{createErrorMessage(errors.name)}</div>
      </div>
      <div className="formGroup">
        <label htmlFor="random"><span>Random</span></label>
        <input
          id="random"
          name="random"
          type="text"
          className={ isValid(errors.random) ? "" : "error" }
          onBlur={ validate }
          value={ form.random }
          onChange={ onChange }
        />
        <div className="errorPlaceholder">{createErrorMessage(errors.random)}</div>
      </div>
      <button onClick={ () => onSubmit(submitCb) }>Submit
      </button>
    </div>
  )

export default Form
