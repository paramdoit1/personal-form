import React from 'react';
import {Field , ErrorMessage} from 'formik'

 const Input = (props) => {
   const {label, name, ...rest} = props;
  return (
    <div className="field-control">
      <label htmlFor = {name}>{label}</label>
      <Field name = {name} id = {name} {...rest}/>
      <ErrorMessage name = {name} component = "div" className="error" />
    </div>
  );
}

export default Input;