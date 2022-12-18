import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'; // need formik to use yup for form validation
import { loginSchema } from '../schemas'; // import validation schema

import { Typography } from '@mui/material'; 

function Signup(props) {

    // const [ loginForm, setLoginForm ] = useState({ user: "", pass: ""});

    const { darkModeOn, toggleDarkMode } = props;

    // const navigate = useNavigate();
    // /* routes user to signup page */
    // function goToSignup() {
    //     navigate('/signup')
    //   }

    // onSubmit or Login handler function -> add Authentication logic here
    const onSubmit = async (values, actions) => {
        
        // below is just a mock API call for testing, add logic for AUTH here later...
        await new Promise((resolve) => {
            //fetch request to backend to authorize 
            fetch('/login', {
                method: 'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(
                    {
                    email: values.email,
                    password: values.password,
                    }
                ),
                })
                .then(res => res.json())
				.then(res => {
					const { email } = res;
					if (email){
					const userObj = { name: email, email: email}
					setUser(userObj)
					} else {
						alert('Login Unsuccessful')
						return;
					}
				})
                .catch(error => {
					alert('Error logging in')
				})
				
            //once we get object back, set the user to the object
            setTimeout(resolve, 1000);
        });
        actions.resetForm(); // resets form fields 
    };

	const {
		// destructured props from the object returned from useFormik hook
		values, // value inside input fields
		errors, // object that holds all form validation logic
		touched, // allows for better dynamic form validation, only shows err after input has been touched
		isSubmitting, // boolean to allow button disabling when submitting
		handleBlur, // validates the form when clicking off the input
		handleChange, // sets formik state whenever state chnages
		handleSubmit, // handles form submitting
	} = useFormik(
		// using the useFormik hook to return an object...
		{
			initialValues: {
				email: '',
				password: '',
				confirmPassword: '',
			},
			validationSchema: loginSchema, // setting the schema for form validation, imported from schemas dir
			onSubmit: onSubmit,
		}
	);

    // function handleChange(e) {
    //     const {name, value, type, checked} = e.target;
    //     setLoginForm(oldData => {
    //         return (
    //             {
    //             ...oldData,
    //             [name]: type === "checkbox" ? checked : value
    //             }
    //         )
    //     })
    // };

    // const navigate = useNavigate()

    // function goToMain() {
    //     navigate('./main')
    //   }

  return (
<>
    {/* <div id={darkModeOn ? "logo" : "logo2"} className={darkModeOn ? 'body2' : 'body'}>Swole</div> */}
    <div id="login-container" className={darkModeOn ? 'body2' : 'body'}>

    
        {/* <div className={darkModeOn ? 'login' : 'login2'}> */}


				<form
					autoComplete='off' // turns off auto-complete of inputs
					className={darkModeOn ? 'login' : 'login2'}
					onSubmit={handleSubmit} // formik method to handle submits of login form
				>

                    <Typography 
                        id='logo-login' 
                        // component='div' 
                        
                        sx={{ flexGrow: 1 }}
                        color={darkModeOn ? 'rgb(83, 83, 100) !important' : 'white !important'}
                    >
                    Swole
                    </Typography>

					<label htmlFor='email'>Email</label>
					<input
						value={values.email}
						onChange={handleChange}
						id='email'
						type='email'
						placeholder='Enter your email'
						onBlur={handleBlur}
						className={errors.email && touched.email ? 'input-error' : ''}
						// what actually shows the errors on form validation
					/>
					{/* shows error message */}
					{errors.email && touched.email && <p className='error'>{errors.email}</p>}

					<label htmlFor='password'>Password</label>
					<input
						value={values.password}
						onChange={handleChange}
						id='password'
						type='password'
						placeholder='Enter your password'
						onBlur={handleBlur}
						className={errors.password && touched.password ? 'input-error' : ''}
						// what actually shows the errors on form validation
					/>
					{/* shows error message */}
					{errors.password && touched.password && <p className='error'>{errors.password}</p>}

                    <label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						value={values.confirmPassword}
						onChange={handleChange}
						id='confirmPassword'
						type='password'
						placeholder='Confirm your password'
						onBlur={handleBlur}
						className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
						// what actually shows the errors on form validation
					/>
					{/* shows error message */}
					{errors.confirmPassword && touched.confirmPassword && (
						<p className='error'>{errors.confirmPassword}</p>
					)}

					<div className='login-box'>
						{/* Login button */}

                        <div className="login-buttons">
{/*                             
                            <button 
                                type='submit' 
                                disabled={isSubmitting} 
                                id={darkModeOn ? "login-button" : "login-button2"}
                                // onClick={}
                            >
                                Login
                            </button> */}

                            <button 
                                type='submit'
                                disabled={isSubmitting} 
                                id={darkModeOn ? "login-button" : "login-button2"}
                            >
                                Signup
                            </button>

                        </div> 


					
					</div>

				</form>

                </div>
                </>

  )
}

export default Signup;