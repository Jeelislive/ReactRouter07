import React, { useState } from 'react';
import Notes from '../Data/Notes';

function Dashbord() {

    const [ shownotes, setshownotes ] = useState(false);

    const handleClickNotes = () => {
        setshownotes(true);
    };


    return (
        <div className="bg-gray-100 font-sans">
            <header className="bg-gray-800 text-white py-6">
                <h1 className="text-4xl text-center">Study Material Hub</h1>
            </header>
            <nav className="bg-gray-700 py-4">
                <ul className="flex justify-center">

                    <li className="mx-6"><button onClick={ handleClickNotes } className="text-white hover:text-yellow-300">Notes </button></li>
                    <li className="mx-6"><a href="#extras" className="text-white hover:text-yellow-300">Extras</a></li>

                </ul>
            </nav>
            { <div className="content">
                { shownotes && <Notes /> }
            </div> }
            <footer className="bg-gray-800 text-white py-6">
                <p className="text-center">&copy; 2024 Study Material Hub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Dashbord;
