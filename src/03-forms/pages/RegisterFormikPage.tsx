import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const RegisterFormikPage = () => {    

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().min(2, 'Min 2').max(15, 'Max 15').required('This field is required'),
                        email: Yup.string().email('Enter a valid email').required('This field is required'),
                        password1: Yup.string().min(6, 'Min 6').required(),
                        password2: Yup.string().oneOf([Yup.ref('password1')], 'Password must match').required()
                    })
                }
            >
                {
                    (formik) => (
                        <Form noValidate>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" component="span"/>

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="password1">Password</label>
                            <Field name="password1" type="password" />
                            <ErrorMessage name="password1" component="span"/>

                            <label htmlFor="password2">Repeat Password</label>
                            <Field name="password2" type="password" />
                            <ErrorMessage name="password2" component="span"/>

                            <button type="submit">Submit</button>

                            <button type="button" onClick={ () => formik.resetForm() }>Reset form</button>

                        </Form>
                    )
                }
            </Formik>
        </div>
    )

}
