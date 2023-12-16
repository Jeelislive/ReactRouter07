import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            WE Are Here For DEVLOPMENT 
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Hello there! I'm Jeel Rupareliya, a passionate and creative UI/UX designer and web developer based in Ahmedabad. With a strong foundation in B.E In Information Technology, I bring 1.5 of experience in crafting immersive digital experiences that blend functionality with aesthetics.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I am always open to new challenges and collaborations. Whether you're looking for a UI/UX designer to transform your digital presence or a web developer to bring your ideas to life, let's connect and discuss how we can achieve your goals together.
                            <p></p>
                            Thank you for visiting my portfolio. I look forward to the opportunity of working together to create something extraordinary.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
