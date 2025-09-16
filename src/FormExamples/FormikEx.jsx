import React from 'react';
import { useFormik } from "formik";

export const FormikEx = () => {
    function UserValidation(formBody) {
        var errors = {};

        // UserName validation
        if (formBody.UserName === "") {
            errors.UserName = "User Name Required";
        } else if (formBody.UserName.length < 4) {
            errors.UserName = "User Name too short, min 4 chars required";
        }

        // Age validation
        if (isNaN(Number(formBody.Age))) {
            errors.Age = "Age must be a number";
        }

        // City validation
        if (formBody.City === "-1") {
            errors.City = "Please select your city";
        }

        // Mobile validation
        if (!formBody.Mobile.match(/^(\+91)?\d{10}$/)) {
            errors.Mobile = "Invalid Mobile number";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            "UserName": "",
            "Age": "",
            "City": "-1",
            "Mobile": ""
        },
        validate: UserValidation,
        onSubmit: (values, { setSubmitting }) => {
            // Simulate a server request
           
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false); // Ensure the form is not in submitting state anymore
          
        }
    });

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register - Formik Form</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.UserName}
                            name="UserName"
                        />
                    </dd>
                    <dd className="text-danger">
                        {formik.touched.UserName && formik.errors.UserName}
                    </dd>
                    
                    <dt>Age</dt>
                    <dd>
                        <input
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.Age}
                            name="Age"
                        />
                    </dd>
                    <dd className="text-danger">
                        {formik.touched.Age && formik.errors.Age}
                    </dd>
                    
                    <dt>City</dt>
                    <dd>
                        <select
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.City}
                            name="City"
                        >
                            <option value="-1">Choose City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyderabad</option>
                        </select>
                    </dd>
                    <dd className="text-danger">
                        {formik.touched.City && formik.errors.City}
                    </dd>
                    
                    <dt>Mobile</dt>
                    <dd>
                        <input
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.Mobile}
                            name="Mobile"
                        />
                    </dd>
                    <dd className="text-danger">
                        {formik.touched.Mobile && formik.errors.Mobile}
                    </dd>
                </dl>
                <button type="submit" disabled={formik.isSubmitting}>Register</button>
            </form>
        </div>
    );
};
