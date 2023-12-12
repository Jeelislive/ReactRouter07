import React, { useRef, useState } from 'react';

function Login() {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const password1Ref = useRef(null);
    const password2Ref = useRef(null);
    const colorRef = useRef(null);


    const success = () => {
        let formcom = document.getElementsByClassName('form-control');
    }

    const setSuccess = (ref) => {
        const formControl = ref.current.parentElement;
        formControl.className = "form-control success"
        ref.current.nextSibling.innerText = '';
        ref.current.classList.add('border-green-500', 'border-4');
        ref.current.classList.remove('border-red-500', 'border-4');
        const small = formControl.querySelector('small');
        small.innerText = '';
    };

    const setError = (input, errorMsg) => {
        const formControl = input.current.parentElement;
        const small = formControl.querySelector('small');
        small.style.color = 'red';
        small.style.fontWeight = 'bold';
        formControl.className = "form-control error";
        small.innerText = errorMsg;
        input.current.classList.add('border-red-500', 'border-4');
    };

    const isEmail = (emailValue) => {
        // Your existing email validation logic
        const atSymbol = emailValue.indexOf('@');
        if (atSymbol < 1) return false;
        var dot = emailValue.lastIndexOf('.');
        if (dot <= atSymbol + 2) return false;
        if (dot === emailValue.length - 1) return false;
        return true;
    };

    const validateInputs = () => {
        const usernameValue = usernameRef.current.value.trim();
        const emailValue = emailRef.current.value.trim();
        const password1Value = password1Ref.current.value.trim();
        const password2Value = password2Ref.current.value.trim();
        // Add similar lines for password1Value and password2Value

        // Your existing validation logic
        if (usernameValue === '') {
            setError(usernameRef, '*Username cannot be null');
        } else if (usernameValue.length <= 4) {
            setError(usernameRef, '*Username must be greater than 4');
        } else {
            setSuccess(usernameRef);
        }

        // Example for email validation
        if (emailValue === '') {
            setError(emailRef, '*Email cannot be null');
        } else if (!isEmail(emailValue)) {
            setError(emailRef, '*Not a valid email');
        } else {
            setSuccess(emailRef);
        }

        if (password1Value === '') {
            setError(password1Ref, '*password cannot be null');
        } else if (password1Value.length <= 5) {
            setError(password1Ref, '*minimum 6 char');
        } else {
            setSuccess(password1Ref);
        }

        if (password2Value === '') {
            setError(password2Ref, '*confirm password cannot be null');

        }
        else if (password2Value.length <= 5) {
            setError(password2Ref, '*minimum 6 char');
        }
        else if (password1Value !== password2Value) {
            setError(password2Ref, '*passwords are not matching');
        }
        else {
            setSuccess(password2Ref); 
        }

    };

    success();

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputs();
        // Continue with form submission logic if inputs are valid
    };

    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <form onSubmit={ handleSubmit } id='form'>


                        <div className="form-control">
                            <label htmlFor="username" className="mb-2 block text-sm font-bold text-gray-700">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"

                                className="w-full px-3 py-2 mb-1 border-black border-2 rounded-md"
                                ref={ usernameRef }
                            />
                            <div className='mb-6'>
                                <small ref={ colorRef }
                                ></small>
                            </div>
                        </div>

                        <div className="form-control">
                            <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"

                                className="w-full px-3 py-2 mb-1 border-black border-2  rounded-md"
                                ref={ emailRef }
                            />
                            <div className='mb-6'>
                                <small ref={ colorRef }></small>
                            </div>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password" className="mb-2 block text-sm font-bold text-gray-700">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"

                                className="w-full px-3 py-2 mb-1 border-black border-2  rounded-md"
                                ref={ password1Ref }
                            />
                            <div className='mb-6'>
                                <small ref={ colorRef }></small>
                            </div>
                        </div>

                        <div className="form-control">
                            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-bold text-gray-700">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"

                                className="w-full px-3 py-2 mb-1 border-black border-2  rounded-md"
                                ref={ password2Ref } // Ensure this is correctly assigned
                            />
                            <div className='mb-6'>
                                <small ref={ colorRef }></small>
                            </div>
                        </div>
                        <center>
                            <button type="submit" className="bg-green-500 text-white px-20 py-2 rounded-md hover:bg-green-600">Login</button>
                        </center>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
