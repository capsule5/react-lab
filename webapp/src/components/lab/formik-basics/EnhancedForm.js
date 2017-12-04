import { withFormik } from "formik"
import Yup from "yup"
import InnerForm from "./InnerForm"

// Add custom yup test
const equalTo = (ref, msg) => Yup.mixed().test({
  name: "equalTo",
  exclusive: false,
  message: msg,
  params: {
    reference: ref.path,
  },
  test (value) {
    return value === this.resolve(ref)
  },
})
Yup.addMethod(Yup.string, "equalTo", equalTo)


const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    email: "",
    age: "",
    password: "",
    passwordConfirm: "",
    job: "",
    agree: false,
  }),
  validationSchema: Yup.object().shape(
    {
      firstName: Yup.string()
        .min(3),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!"),
      age: Yup.number()
        .min(18, "You must be 18")
        .positive()
        .integer()
        .required("Age is required!"),
      password: Yup.string().required("Password is required!"),
      passwordConfirm: Yup.string().equalTo(Yup.ref("password"), "Passwords must match").required(),
      job: Yup.string().required(),
      agree: Yup.boolean().oneOf([ true ], "Must Accept Terms and Conditions"),
    }
  ),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("[stab]", "values", values)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: "BasicForm", // helps with React DevTools
})(InnerForm)


export default EnhancedForm
