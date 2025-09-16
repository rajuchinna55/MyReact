import { useFormik } from "formik";
import * as yup from "yup";

export function YupDemo() {
    const formik = useFormik({
        initialValues: {
            "UserName": "",
            "Age": "",
            "City": "-1",
            "Mobile": ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
        validationSchema: yup.object({
            "UserName": yup.string()
                .required("User Name Required")
                .min(4, "Name too short..")
                .max(10, "Name too long.."),
            "Age": yup.number()
                .required("Age Required")
                .typeError("Age must be a number"), // Ensures that a number is entered
            "City": yup.string()
                .required("City Required")
                .notOneOf(["-1"], "Please choose a valid city"), // Ensure a valid city is selected
            "Mobile": yup.string()
                .required("Mobile Required")
                .matches(/\+91\d{10}/, "Invalid Mobile number, must be +91 followed by 10 digits")
        })
    });

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register - Formik Yup</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input
                            type="text"
                            {...formik.getFieldProps("UserName")}
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
                            {...formik.getFieldProps("Age")}
                            name="Age"
                        />
                    </dd>
                    <dd className="text-danger">
                        {formik.touched.Age && formik.errors.Age}
                    </dd>

                    <dt>City</dt>
                    <dd>
                        <select {...formik.getFieldProps("City")} name="City">
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
                            {...formik.getFieldProps("Mobile")}
                            name="Mobile"
                        />
                    </dd>
                    <dd className="text-danger">
                        {formik.touched.Mobile && formik.errors.Mobile}
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
