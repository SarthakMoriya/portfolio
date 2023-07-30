import React from 'react'

import html from '../assets/html.png'
import github from '../assets/github.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'

import './Skills.css'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className="max-w-[1000px] h-full  w-full mx-auto p-4 flex flex-col justify-center ">
                <div className="">
                    <p className='text-4xl font-bold border-b-4 border-pink-600 inline '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with.</p>
                </div>
                <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-4 skills-grid">
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={html} alt="html icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={css} alt="html icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={javascript} alt="html icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={mongo} alt="html icon" />
                        <p className='my-4'>MONGO</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={node} alt="html icon" />
                        <p className='my-4'>NODE</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={react} alt="html icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={tailwind} alt="html icon" />
                        <p className='my-4'>TAILWIND CSS</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={github} alt="html icon" />
                        <p className='my-4'>Git</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills