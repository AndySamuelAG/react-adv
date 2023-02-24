import { Formik, Form } from 'formik'
import * as Yup from "yup";

import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik 
                initialValues={
                    {
                        firstName: '',
                        lastName: '',
                        email: '',
                        terms: false,
                        jobType: '',
                    }
                }
                onSubmit={
                    (values) => {
                        console.log(values);
                    }
                }
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                       .max(15, 'Must have 15 characters or less')
                                       .required('Required'),
                        lastName: Yup.string()
                                     .max(15, 'Must have 15 characters or less')
                                     .required('Required'),
                        email: Yup.string()
                                  .email('Invalid email')
                                  .required('Required'),
                        terms: Yup.boolean().oneOf([true], 'Must accept terms and conditions'),
                        jobType: Yup.string()
                                    .required('Required')
                                    .notOneOf( ['it-jr'], 'This option is not allow' )
                    })
                }
            >
                {
                    (formik) => (
                        <Form noValidate>
                            <MyTextInput label="First Name" name="firstName" placeholder='John'/>
                            <MyTextInput label="Last Name" name="lastName" placeholder='Doo'/>
                            
                            <MyTextInput label="Email Address" name="email" placeholder='john@doo.com' type="email" />


                            <MySelect label="jobType" name="jobType">
                                <option value="">Select your job</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>


                            <MyCheckbox label="Terms and conditions" name="terms"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>

        </div>

    )
}
