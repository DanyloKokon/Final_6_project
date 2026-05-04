import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

const RegistrationForm = () => {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Simulate an API call
          setTimeout(() => {
            console.log('Registration Data:', values);
            alert('Registration Successful!');
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Name Field */}
            <div>
              <label htmlFor="name">Full Name</label>
              <Field name="name" type="text" placeholder="John Doe" />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" placeholder="john@example.com" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" placeholder="********" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            {/* Registration Button */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;