import React, { useRef, useState } from 'react';

function Login() {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const password1Ref = useRef(null);
    const password2Ref = useRef(null);

    const [ usernameError, setUsernameError ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ password1Error, setPassword1Error ] = useState('');
    const [ password2Error, setPassword2Error ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputs();
    };

    const validateInputs = () => {
        const usernameValue = usernameRef.current.value.trim();
        const emailValue = emailRef.current.value.trim();
        const password1Value = password1Ref.current.value.trim();
        const password2Value = password2Ref.current.value.trim();

        if (usernameValue === '') {
            setUsernameError('*Username cannot be null');
        } else if (usernameValue.length <= 4) {
            setUsernameError('*Username must be greater than 4');
        } else {
            setUsernameError('');
        }

        if (emailValue === '') {
            setEmailError('*Email cannot be null');
        } else if (!isEmail(emailValue)) {
            setEmailError('*Not a valid email');
        } else {
            setEmailError('');
        }

        if (password1Value === '') {
            setPassword1Error('*password cannot be null');
        } else if (password1Value.length <= 5) {
            setPassword1Error('*minimum 6 char');
        } else {
            setPassword1Error('');
        }

        if (password2Value === '') {
            setPassword2Error('*confirm password cannot be null');
        } else if (password2Value.length <= 5) {
            setPassword2Error('*minimum 6 char');
        } else if (password1Value !== password2Value) {
            setPassword2Error('*passwords are not matching');
        } else {
            setPassword2Error('');
        }

        // If there are no errors, you can proceed with form submission
        if (
            !usernameError &&
            !emailError &&
            !password1Error &&
            !password2Error
        ) {
            // Here you can submit the form or perform any other actions
            console.log('Form submitted successfully');
        }
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

    const mystyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    const mycolor = {
        backgroundColor: "#0000008a",
    }

    return (
        <>
            <div className="bg-blue-500 flex items-center justify-center h-screen" style={ mystyle }>
                <div className="bg-blue-300 m-5 p-8 rounded shadow-md w-96" style={ mycolor }>

                    <form onSubmit={ handleSubmit } id="form">
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
                            <button type="submit" className="bg-green-500 text-white px-20 py-2 rounded-md hover:bg-green-600">Login</button>
                        </center>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
