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
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  } );

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        ></input>
        <br></br>
        <label htmlFor="password">Password:</label>
        {/* autoComplete attribute Based on the console suggestions */}
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.password}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
