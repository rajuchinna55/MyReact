import React from 'react'
import { useFormik } from "formik";
import { error } from 'jquery';

export const FormikEx1 = () => {
const formik= useFormik({
    initialValues:{ email: '', password: '', firstname:'', lastname:'' },
    validate:(values)=>{
        console.log(formik)
        const errors = {};
        if(!values.firstname){
            errors.firstname="please enter your first name";
        }
        if(!values.lastname){
            errors.lastname="please enter your first name";
        }
        if (!values.password) {
            errors.password='please enter your password';
        }else if (isNaN(Number(values.password))) {
            errors.password='please enter must be number';
        }
      
        if(!values.email){
            errors.email="please enter your email";
        }else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          } 
        return errors;
    },
    
    onSubmit: (values) =>{
        console.log(values)
    },
    
})
  return (
   <div>
     <h5>FormikEx1</h5>

        <form action="" onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor="fn">First Name</label>
        <input type="text" name="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur}  />
        <div style={{color:'red'}}>{formik.touched.firstname && formik.errors.firstname}</div>
        </div>
        <div>
        <label htmlFor="ln">Last Name</label>
        <input type="text" name="lastname" onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
        <div style={{color:'red'}}>{formik.touched.lastname && formik.errors.lastname}</div>
        </div>
        <div>
        <label htmlFor="pw">Password</label>
        <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <div style={{color:'red'}}>{formik.touched.password && formik.errors.password}</div>
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="Email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <div style={{color:'red'}}>{formik.touched.email && formik.errors.email}</div>
        </div>
            <button type="submit">Submit</button>
        </form>

   </div>
  )
}
