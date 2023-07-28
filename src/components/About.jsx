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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae nemo totam magni eligendi deleniti! Et quidem fuga ut repellendus sunt iure nihil odio dolore fugit? Quod soluta accusantium ipsam?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About