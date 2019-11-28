import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormContainer } from "./FormStyled";

const styleError = {
  borderBottom: "2px solid crimson"
};

const formValidation = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  age: Yup.number("Must be a number").required("Please enter your age")
});

function Form({ addUser, handleClose }) {
  return (
    <FormContainer>
      <Formik
        initialValues={{ name: "", salary: "135813", age: "" }}
        validationSchema={formValidation}
        onSubmit={values => {
          let data = values;
          addUser(data);
          handleClose()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-box">
                <span>{errors.name ? errors.name : ""}</span>
              <Field
                type="text"
                name="name"
                placeholder={"Name"}
                value={values.name}
                style={errors.name && touched.name ? styleError : null}
              />
            </div>
            <div className="input-box disabled">
              <Field
                type="text"
                name="salary"
                placeholder={"Salary"}
                value={"135813"}
              />
            </div>
            <div className="input-box">
                <span>{errors.age ? errors.age : ""}</span>
              <Field
                type="text"
                name="age"
                placeholder={"Age"}
                value={values.age}
                style={errors.age && touched.age ? styleError : null}
              />
            </div>
            <button className="button-submit" type="submit">Send</button>
            <button className="button-close" onClick={() => handleClose()} type="button">Close</button>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default Form;
