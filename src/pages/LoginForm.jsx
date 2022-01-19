import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { Input } from "../components/common";

const LoginForm = () => {
  const initialValues = {
    emailAddress: "",
    password: "",
  };

  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .email("Invalid email format")
      .required("Email address required"),
    password: Yup.string().required("Password required"),
  });

  const onSubmit = (values) => {
    console.log("Values: ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="App">
            <Input type="email" label="Email Address" name="emailAddress" />
            <Input type="password" label="Password" name="password" />
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
