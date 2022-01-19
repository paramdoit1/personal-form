import React from 'react';
import {Field, ErrorMessage} from 'formik'
const  Select = (props) => {

    const {label, name, options, ...rest} = props;
  return (
    <div className="field-control">
      <label htmlFor = {name}>{label}</label>
      <Field as = 'select' name = {name} id = {name} {...rest}>
      {
          options.map(option => {
              return(
                  <option key = {option.value} value = {option.value}>{option.key}    </option>
              )
          })
      }
      </Field>
      <ErrorMessage name = {name} component = "div" className="error" />
    </div>
  );
}

export default  Select;