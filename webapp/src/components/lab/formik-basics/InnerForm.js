import React from "react"

const MyInnerForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div className="formGroup">
        <label htmlFor="firstName"><span>Name</span></label>
        <input
          id="firstName"
          placeholder="Enter your firstName"
          type="text"
          value={ values.firstName }
          onChange={ handleChange }
          onBlur={ handleBlur }
          className={ errors.firstName && touched.firstName ? "text-input error" : "text-input" }
        />
        {errors.firstName &&
          touched.firstName && <div className="input-feedback">{errors.firstName}</div>}
      </div>
      
      <div className="formGroup">
        <label htmlFor="email"><span>Email</span></label>
        <input
          id="email"
          placeholder="Enter your email"
          type="text"
          value={ values.email }
          onChange={ handleChange }
          onBlur={ handleBlur }
          className={ errors.email && touched.email ? "text-input error" : "text-input" }
        />
        {errors.email &&
        touched.email && <div className="input-feedback">{errors.email}</div>}
      </div>

      <div className="formGroup">
        <label htmlFor="age"><span>Age</span></label>
        <input
          id="age"
          placeholder="Enter your age"
          type="text"
          value={ values.age }
          onChange={ handleChange }
          onBlur={ handleBlur }
          className={ errors.age && touched.age ? "text-input error" : "text-input" }
        />
        {errors.age &&
        touched.age && <div className="input-feedback">{errors.age}</div>}
      </div>

      <div className="formGroup">
        <label htmlFor="password"><span>Password</span></label>
        <input
          id="password"
          placeholder="Enter your password"
          type="password"
          value={ values.password }
          onChange={ handleChange }
          onBlur={ handleBlur }
          className={ errors.password && touched.password ? "text-input error" : "text-input" }
        />
        {errors.password &&
        touched.password && <div className="input-feedback">{errors.password}</div>}
      </div>

      <div className="formGroup">
        <label htmlFor="passwordConfirm"><span>Confirm Password</span></label>
        <input
          id="passwordConfirm"
          placeholder="Confirm your password"
          type="password"
          value={ values.passwordConfirm }
          onChange={ handleChange }
          onBlur={ handleBlur }
          className={ errors.passwordConfirm && touched.passwordConfirm ? "text-input error" : "text-input" }
        />
        {errors.passwordConfirm &&
        touched.passwordConfirm && <div className="input-feedback">{errors.passwordConfirm}</div>}
      </div>

      <div className="formGroup">
        <label htmlFor="job"><span>Job</span></label>
        <select
          id="job"
          value={ values.job }
          onChange={ handleChange }
          onBlur={ handleBlur }
        >
          <option value="">select a job</option>
          <option value="cuisto">cuisto</option>
          <option value="soudeur">soudeur</option>
        </select>
        {errors.job &&
        touched.job && <div className="input-feedback">{errors.job}</div>}
      </div>

      <div className="formGroup">
        <label htmlFor="agree"><span>Agree</span></label>
        <input
          id="agree"
          type="checkbox"
          onChange={ handleChange }
          onBlur={ handleBlur }
          name="agree"
          checked={ values.agree }
        />
        {errors.agree &&
          touched.agree && <div className="input-feedback">{errors.agree}</div>}
      </div>

      <div>
        <button
          type="button"
          className="outline"
          onClick={ handleReset }
          disabled={ !dirty || isSubmitting }
        >
          Reset
        </button>
        <button type="submit" disabled={ isSubmitting }>
          Submit
        </button>
      </div>

    </form>
  )
}

export default MyInnerForm
