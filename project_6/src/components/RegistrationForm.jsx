import React from 'react';
import { VscChromeClose } from "react-icons/vsc";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Stepper, { Step } from './Bits/Stepper/Stepper';

// Define the validation rules
const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const RegistrationForm = ({ setOp, setValues }) => {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className='modal-reg'>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Simulate an API call
          setTimeout(() => {
            console.log('Registration Data:', values);
            setValues(values)
            alert('Registration Successful!');
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='modal-form'>

            <button className='modal-close' onClick={() => setOp(false)}><VscChromeClose /></button>
            <Stepper
              className="stepper"
              initialStep={1}
              onStepChange={(step) => {
                console.log(step);
              }}
              onFinalStepCompleted={() => console.log("All steps completed!")}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              <Step>
                {/* Name Field */}
                <div>
                  <label htmlFor="name">Full Name</label>
                  <Field className="form-control" name="name" type="text" placeholder="John Doe" />
                  <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                </div>
              </Step>
              <Step>
                {/* Email Field */}
                <div>
                  <label htmlFor="email">Email</label>
                  <Field className="form-control" name="email" type="email" placeholder="john@example.com" />
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </div>
              </Step>
              <Step>
                {/* Password Field */}
                <div>
                  <label htmlFor="password">Password</label>
                  <Field className="form-control" name="password" type="password" placeholder="********" />
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </div>
              </Step>
              <Step>

                {/* Registration Button */}
                <button type="submit" className='modal-btn' disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>
              </Step>
            </Stepper>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;