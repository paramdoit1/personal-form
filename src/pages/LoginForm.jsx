import React from "react";
import {useEffect} from 'react';
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { Input } from "../components/common";

const LoginForm = (props) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("username required"),
    password: Yup.string().required("Password required"),
  });

  const onSubmit = (values) => {
    props.next(values);
  };

  useEffect(() => {
    fetch("http://localhost:8000/details")
    .then(response=> {
      return response.json();
    })
    .then(data=> {
      console.log('Data::',data);
    })
  
  }, [])

  return (
    <Formik
      initialValues={props.data}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <p className="form-label"> Login </p>
            <Input type="input" label="User name" name="username" className = "user" />
            <Input type="password" label="Password" name="password" />
            <button type='submit'>Next</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
