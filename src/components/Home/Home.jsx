import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-xl font-bold sm:text-6xl">
                            Study Materials
                            <span className="hidden sm:block text-4xl pt-2 text-red-600">PDFs are ready..</span>
                        </h2>
                    </div>
                </div>
<<<<<<< HEAD

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img z className="w-96 rounded-lg drop-shadow-xl" alt="image1" />
=======
                {/* Make sure to provide the correct path for the local image */ }
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img className="h-130 w-100" src="https://a.slack-edge.com/9c84081/marketing/img/solutions/tech/png/billboard.png" alt="Local Image" />
>>>>>>> 21b0e1f6c3b92f7f662afbf1ef262a38e97facf5
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
                {/* Provide the correct URL for the external image */ }
                <img className="w-130 h-100" src="https://blog.stucred.com/wp-content/uploads/2020/07/Study-area.jpg" alt="External Image" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium" >
                <span style={ { color: '#DC2626' } }>Let's</span> Collaborate to create New
            </h1>


        </div>
    );
}
