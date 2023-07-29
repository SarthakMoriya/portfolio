import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNavbar = () => setNav(!nav)
    return (
        <div className='w-full h-[80px] fixed flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className="">
                <img src={logo} alt="" className='w-[50px]' />
            </div>
            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className=''>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link></li>
                <li className=''>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link></li>
                <li className=''>
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link></li>
                <li className=''>
                    <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link></li>
                <li className=''>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link></li>
            </ul>
            {/* Hamburger */}
            <div className="md:hidden z-10" onClick={handleNavbar}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            {nav && (
                <ul className=' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '>
                    <li className='text-4xl py-6'>
                        <Link onClick={handleNavbar} to="home" smooth={true} duration={500} >
                            Home
                        </Link></li>
                    <li className='text-4xl py-6'>
                        <Link onClick={handleNavbar} to="about" smooth={true} duration={500} >
                            About
                        </Link></li>
                    <li className='text-4xl py-6'>
                        <Link onClick={handleNavbar} to="skills" smooth={true} duration={500} >
                            Skills
                        </Link></li>
                    <li className='text-4xl py-6'>
                        <Link onClick={handleNavbar} to="work" smooth={true} duration={500} >
                            Work
                        </Link></li>
                    <li className='text-4xl py-6'>
                        <Link onClick={handleNavbar} to="contact" smooth={true} duration={500} >
                            Contact
                        </Link></li>

                </ul>
            )}
            {/* social Links */}
            <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a href="https://www.linkedin.com/in/sarthak-moriya-71ab5321b/" className='flex  justify-between items-center w-full text-gray-300 '>LinkedIn <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="https://github.com/SarthakMoriya" className='flex  justify-between items-center w-full text-gray-300 '>Github <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="mailto:moriyasarthak@gmail.com" className='flex  justify-between items-center w-full text-gray-300 '>Email <HiOutlineMail size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a href="/" className='flex  justify-between items-center w-full text-gray-300 '>Resume <BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar