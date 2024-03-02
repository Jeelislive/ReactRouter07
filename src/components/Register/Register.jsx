import React from 'react';

function Register() {
    return (
        <div className="form-container bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form action="/signup" method="post" className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text" id="name" name="username" placeholder="Enter your name" required autoComplete="off" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" required className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" />
                </div>
                <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </form>
        </div>
    );
}

export default Register;
