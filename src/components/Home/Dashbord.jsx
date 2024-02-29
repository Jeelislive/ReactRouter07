import React, { useState } from 'react';
import Notes from '../Pdf/Notes';

function Dashbord() {
    const [ selectedBranch, setSelectedBranch ] = useState("");
    const [ selectedSemester, setSelectedSemester ] = useState("");
    const [ shownotes, setShownotes ] = useState(false);



    const handleClickNotes = () => {

        if (selectedBranch === "CE" && selectedSemester === "4") {
            setShownotes(true);
        } else {
            setShownotes(false);
        }
    };



    return (
        <div className="bg-gray-100 font-sans">
            <header className="bg-gray-800 text-white py-6">

                <div>
                    <div >
                        <form class="mx-auto flex flex-auto">
                            <label for="branch" class="m-3 text-sm font-medium text-gray-900 dark:text-white text-align">Select option</label>
                            <select id="branch" onChange={ (e) => setSelectedBranch(e.target.value) }
                                defaultValue={ selectedBranch } class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected >Choose Your Branch</option>
                                <option value="CE">Computer</option>
                                <option value="IT">Information Technology</option>
                                <option value="DS">Data-Science</option>
                                <option value="EC">Electrical & Communication</option>
                            </select>

                            <label for="branch" class=" ml-20 max-w-96 block m-3 text-sm font-medium text-gray-900 dark:text-white">Select option</label>
                            <select id="sem" onChange={ (e) => setSelectedSemester(e.target.value) }
                                defaultValue={ selectedSemester } class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected
                                >Choose Your Semester</option>
                                <option value="1&2">1&2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>+
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>

                        </form>


                    </div>
                </div>

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
