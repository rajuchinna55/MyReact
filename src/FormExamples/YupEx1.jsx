import React from 'react'
import { Field, Formik, useFormik } from 'formik';
import * as Yup from 'yup';

export const YupEx1 = () => {
   
  return (
    <div>
        <h1>YupLibrary Form Validation</h1>
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
                (formik) =>{
                    return(
                        <form action="" onSubmit={formik.handleSubmit}>
                        <div>
                        <label htmlFor="fn">First Name</label>
                        <Field name="firstname"></Field>
                        {/* <input type="text" name="firstname" {...formik.getFieldProps("firstname")}  /> */}
                        <div style={{color:'red'}}>{formik.touched.firstname && formik.errors.firstname}</div>
                        </div>
                        <div>
                        <label htmlFor="ln">Last Name</label>
                        <Field name="lastname"></Field>
                        {/* <input type="text" name="lastname" {...formik.getFieldProps("lastname")}/> */}
                        <div style={{color:'red'}}>{formik.touched.lastname && formik.errors.lastname}</div>
                        </div>
                        <div>
                        <label htmlFor="pw">Password</label>
                        <Field name="password"></Field>
                        {/* <input type="password" name="password" {...formik.getFieldProps("password")} /> */}
                        <div style={{color:'red'}}>{formik.touched.password && formik.errors.password}</div>
                        </div>
                        <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email"></Field>
                        {/* <input type="Email" name="email" {...formik.getFieldProps("email")}/> */}
                        <div style={{color:'red'}}>{formik.touched.email && formik.errors.email}</div>
                        </div>
                            <button type="submit">Submit</button>
                        </form>
                    )
                }
            }
        </Formik>

        
    </div>
  )
}
