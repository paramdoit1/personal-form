import React from "react";
import { Field, ErrorMessage } from "formik";

const Radio = props => {
    const { label, name, options, ...rest } = props
    return (
      <div className="field-control">
        <label>{label}</label>
        <Field name={name} >
          {({ field }) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                    <div className="radiogroup">
                  <input
                    type='radio'
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                  </div>
                </React.Fragment>
              )
            })
          }}
        </Field>
      <ErrorMessage name = {name} component = "div" className="error" />
    </div>
  )
}

export default Radio;   