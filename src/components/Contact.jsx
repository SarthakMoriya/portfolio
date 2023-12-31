import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f]  flex justify-center items-center p-4'>
            <form action="https://getform.io/f/04abd675-ffa9-4c99-aa65-8b967f1c674b" method="POST" className='flex flex-col max-w-[600px] w-full'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact
                    </p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - <a href='@mailto:moriyasarthak@gmail.com'>moriyasarthak@gmail.com</a></p>
                </div>
                <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6]  p-2' />
                <input type="email" placeholder='Email' name='name' className='bg-[#ccd6f6] my-4 p-2' />
                <textarea name="message" placeholder='Mesaage' id="" cols="30" rows="10" className='bg-[#ccd6f6] p-2'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>submit</button>
            </form>
        </div>
    )
}

export default Contact