import React from 'react'
import ReactDOM from 'react-dom';
import { Field, Formik, Form, ErrorMessage, useField} from 'formik';
import * as Yup from 'yup';

export const YupEx2 = () => {
    // Custom TextInput component
const MyTextInput = ({ label, ...props }) => {
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <Field {...props} />
        <ErrorMessage name={props.name} component="div" style={{color: 'red'}} />
      </div>
    );
  };
  return (
    <div>
        <div>YupEx2</div>
        <Formik
            initialValues={{ email: '', password: '', firstname:'', lastname:'' }}

            validationSchema={ Yup.object({
                firstname: Yup.string().required('Required your first name'),
                lastname: Yup.string().required('Required your last name'),
                email: Yup.string().email('Invalid email address').required('Required enter your email id'),
                password: Yup.string()
                .matches(/^\d+$/, 'Password must only contain numbers')
                .required('Please enter your password')
            })}

            onSubmit={ (values) =>{
                console.log(values)
            }}

        >
       {
        props=>
            <Form>
        <div>
        <MyTextInput
                    label="First Name"
                    name="firstname"
                    type="text"
                    placeholder="first name"
                />
                

        {/* <label htmlFor="fn">First Name</label>
        <Field name="firstname"></Field>
        <ErrorMessage name="firstname" /> */}
        </div>
        <div>
        <MyTextInput
                    label="Last Name"
                    name="lastname"
                    type="text"
                    placeholder="first name"
                />
        {/* <label htmlFor="ln">Last Name</label>
        <Field name="lastname"></Field>
        <ErrorMessage name="lastname" /> */}
        </div>
        <div>
        <MyTextInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="first name"
                />
        {/* <label htmlFor="pw">Password</label>
        <Field name="password"></Field>
        <ErrorMessage name="password" /> */}
        </div>
        <div>
        <MyTextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="first name"
                />
        {/* <label htmlFor="email">Email</label>
        <Field name="email"></Field>
        <ErrorMessage name="email" /> */}
        </div>
        <button disabled={!props.isValid}>Register</button>
        <button disabled={!props.dirty}>Save</button>
      
</Form>
       }
        </Formik>
    </div>
  )
}
