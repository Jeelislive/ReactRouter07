import React from 'react';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Main content */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
                    <div className="w-full sm:w-auto order-2 sm:order-1">
                        <a href="https://ibb.co/61sQMdj">
                            <img src="https://i.ibb.co/QCm0g5y/pngwing-com.png" className="w-full h-auto sm:w-110vw sm:h-70vw lg:w-96 lg:h-60" alt="pngwing-com" />
                        </a>
                    </div>
                    <div className="max-w-xl sm:mt-1 mt-5 space-y-8 text-center sm:text-right sm:ml-auto sm:mr-8 order-1 sm:order-2">
                        <h2 className="text-2xl sm:text-6xl font-bold">
                            Study Materials
                            <span className="block sm:hidden text-4xl text-red-600">PDFs are ready..</span>
                        </h2>
                        <span className="hidden sm:block text-4xl text-red-600">PDFs are ready..</span>
                    </div>
                </div>
            </aside>

            {/* Grid container for the second image */}
            <div className="grid place-items-center sm:mt-10">
                <img className="sm:w-96 w-48" src="https://blog.stucred.com/wp-content/uploads/2020/07/Study-area.jpg" alt="image2" />
            </div>

            {/* Heading */}
            <h1 className="text-center text-xl sm:text-5xl py-10 font-medium sm:pb-16">Let's Collaborate to create New</h1>
        </div>
    );
}

