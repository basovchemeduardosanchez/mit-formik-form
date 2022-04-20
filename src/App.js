import React from "react";
// TODO: import useFormik from formik library
import { Formik, useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik( {
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Field required';
      } else if (!values.email.includes('@')) {
        errors.email = 'Username should be an e-mail'
      }
      if (!values.password) {
        errors.password = 'Field required';
      }

      return errors;
    },
    onSubmit: values => {
      alert( 'Login Successful' );
    },
  } );

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="emailField">Email:</label>
        <input
          id="emailField"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        ></input>
        {formik.errors.email ? <div id="emailError">{formik.errors.email}</div> : null}
        <br></br>
        <label htmlFor="pswField">Password:</label>
        {/* autoComplete attribute Based on the console suggestions */}
        <input
          id="pswField"
          name="password"
          type="password"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.password}
        ></input>
        {formik.errors.password ? <div id="pswError">{formik.errors.password}</div> : null}
        <br></br>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
