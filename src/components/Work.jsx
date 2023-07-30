import React from 'react'

import workimg from '../assets/projects/workImg.jpeg'
import gym from '../assets/projects/gym.png';
import stack from '../assets/projects/stackoverflow.png';
import dalle from '../assets/projects/dalle.png';
import farmer from '../assets/projects/farmer.png';
import youtube from '../assets/projects/youtube.png';
import netflix from '../assets/projects/netflix.png';
import social from '../assets/projects/sociopedia.png';

const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f] w-full  text-gray-300'>
            {/* Container */}
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='inline text-4xl font-bold border-b-4 border-pink-600 text-gray-300'>Work</p>
                    <p className='py-4'>// Check out some of my work</p>
                </div>
                {/* Project Container */}
                <div

                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Hover-div */}
                    <div
                        style={{ backgroundImage: `url(${stack})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                               StackOverflow Clone
                            </span>
                            <div className="pt-8 text-center">

                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${farmer})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Farmer Ecommerce App
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/SarthakMoriya/Hackathon">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${dalle})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Dall-E AI Image Generator
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/SarthakMoriya/Dalle-OpenAI-AI-Image-Generator">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${social})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Sociopedia App
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/SarthakMoriya/sociopedia3">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${youtube})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Youtube Clone
                            </span>
                            <div className="pt-8 text-center">

                                <a href="https://github.com/SarthakMoriya/YoutubeClone">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${gym})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Gym Excercise Finder
                            </span>
                            <div className="pt-8 text-center">

                                <a href="https://github.com/SarthakMoriya/gymApp">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work