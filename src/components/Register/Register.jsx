import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Register() {
    const mystyle = { /* your style object */ };
    const mycolor = { /* your style object */ };

    const [ usernameError, setUsernameError ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ password1Error, setPassword1Error ] = useState('');
    const [ password2Error, setPassword2Error ] = useState('');

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const password1Ref = useRef(null);
    const password2Ref = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic goes here
        // Example of form validation
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password1 = password1Ref.current.value;
        const password2 = password2Ref.current.value;

        if (!username) {
            setUsernameError('Please enter a username');
        } else {
            setUsernameError('');
        }

        if (!email) {
            setEmailError('Please enter an email');
        } else {
            setEmailError('');
        }

        if (!password1) {
            setPassword1Error('Please enter a password');
        } else {
            setPassword1Error('');
        }

        if (!password2) {
            setPassword2Error('Please confirm your password');
        } else if (password1 !== password2) {
            setPassword2Error('Passwords do not match');
        } else {
            setPassword2Error('');
        }
    }

    return (
        <>
            <div className="bg-blue-500 flex items-center justify-center h-screen" style={ mystyle }>
                <div className="bg-blue-300 m-5 p-8 rounded shadow-md w-96" style={ mycolor }>
                    <form onSubmit={ handleSubmit } id="form" action="http://localhost:5000/register" method="POST">
                        <div className="form-control">
                            <label htmlFor="username" className="mb-2 block text-sm font-bold text-white">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                className={ `w-full px-3 py-2 mb-1 border-black border-2 rounded-md ${ usernameError ? 'border-red-500' : '' }` }
                                ref={ usernameRef }
                            />
                            { usernameError && <small className="text-red-500">{ usernameError }</small> }
                        </div>
                        <br />
                        <div className="form-control">
                            <label htmlFor="email" className="mb-2 block text-sm font-bold text-white">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className={ `w-full px-3 py-2 mb-1 border-black border-2 rounded-md ${ emailError ? 'border-red-500' : '' }` }
                                ref={ emailRef }
                            />
                            { emailError && <small className="text-red-500">{ emailError }</small> }
                        </div>
                        <br />
                        <div className="form-control">
                            <label htmlFor="password" className="mb-2 block text-sm font-bold text-white">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className={ `w-full px-3 py-2 mb-1 border-black border-2 rounded-md ${ password1Error ? 'border-red-500' : '' }` }
                                ref={ password1Ref }
                            />
                            { password1Error && <small className="text-red-500">{ password1Error }</small> }
                        </div>
                        <br />
                        <div className="form-control">
                            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-bold text-white">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className={ `w-full px-3 py-2 mb-1 border-black border-2 rounded-md ${ password2Error ? 'border-red-500' : '' }` }
                                ref={ password2Ref }
                            />
                            { password2Error && <small className="text-red-500">{ password2Error }</small> }
                        </div>
                        <br />
                        <center>
                            <button type="submit" className="bg-green-500 text-white px-20 py-2 rounded-md hover:bg-green-600">
                                Register
                            </button>
                        </center>
                    </form>
                </div>
            </div>

            <div className="form-container bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <form action="/signup" method="post" className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="username"
                            placeholder="Enter your name"
                            required
                            autoComplete="off"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Register;
