import React from 'react';

function Dashbord() {
    return (
        <div className="bg-gray-100 font-sans">
            <header className="bg-gray-800 text-white py-6">
                <h1 className="text-4xl text-center">Study Material Hub</h1>
            </header>
            <nav className="bg-gray-700 py-4">
                <ul className="flex justify-center">
                    <li className="mx-6"><a href="#courses" className="text-white hover:text-yellow-300">Courses</a></li>
                    <li className="mx-6"><a href="#notes" className="text-white hover:text-yellow-300">Notes</a></li>
                    <li className="mx-6"><a href="#assignments" className="text-white hover:text-yellow-300">Assignments</a>
                    </li>
                    <li className="mx-6"><a href="#extras" className="text-white hover:text-yellow-300">Extras</a></li>
                    <li className="mx-6"><a href="#resources" className="text-white hover:text-yellow-300">Resources</a></li>
                    <li className="mx-6"><a href="#community" className="text-white hover:text-yellow-300">Community</a></li>
                </ul>
            </nav>
            {/* Content goes here */ }
            <footer className="bg-gray-800 text-white py-6">
                <p className="text-center">&copy; 2024 Study Material Hub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Dashbord;