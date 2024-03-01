import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Study Materials
                            <span className="hidden sm:block text-4xl text-red-600">PDFs are ready..</span>
                        </h2>
                    </div>
                </div>
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img className="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrs4cQN4JwWxQaFpf-wt1YRPy5rUk6uIiyrQ&usqp=CAU' alt="image1" style={ { width: '40vw', height: '25vw' } } />
                </div>

            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-130 w-100" src="https://blog.stucred.com/wp-content/uploads/2020/07/Study-area.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium" >
                <span style={ { color: '#DC2626' } }>Let's</span> Collaborate to create New
            </h1>
        </div>
    );
}

