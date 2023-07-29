import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="pb-8 pl-4 sm:text-right">
                        <p className='text-4xl font-bold text-pink-600 inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div className=""></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>I'm Sarthak, nice to meet you. Please take a look around</p>
                    </div>
                    <div className="">
                        <p>
                            Aspiring Full Stack MERN developer with a passion for crafting innovative web applications. Skilled in React, Node.js, Express.js, and MongoDB. Committed to delivering user-centric and efficient solutions. Eager to collaborate and contribute to exciting projects. Let's turn ideas into reality together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About