import React from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr';
import { FaFacebook, FaInstagram, FaGithub, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-teal-800'>
      <h1 className='text-4xl text-white p-3 font-bold text-center text[#001b5e]'>Contact</h1>
      <div className='p-5 flex flex-col justify-center items-center z-20 bg-teal-600'>
                <a href="https://www.facebook.com/jesseljoy.velasco" className='w-[75%] flex justify-center bg-[#001b5e] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaFacebook size={20} className='text-white'/>
                    <span className='pl-4 text-white'>Jesse Joy Velasco</span>
                </a>
                <a href="https://www.instagram.com/jessyume8/" className='bg-[#78064e] w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaInstagram size={20} className='text-white'/>
                    <span className='pl-4 text-white'>jessyume8</span>
                </a>
                <a href="https://github.com/Jessel2023" className='w-[75%] bg-[#6e6668] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaGithub size={20} className='text-white'/>
                    <span className='pl-4 text-white'>Jessel2023</span>
                </a>
                <a href="https://www.tiktok.com/@yumeejessy" className='w-[75%] bg-[#c22758] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaTiktok size={20} />
                    <span className='pl-4 text-white'>jessy</span>
                </a>
                <a href="https://velasco.jesseljoy1@gmail.com" className='w-[75%] bg-[#bec1cc] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} className='text-white'/>
                    <span className='pl-4 text-white'>Jessel Joy M. Velasco </span>
                </a>

                
            </div>
    </div>
  )
}

export default Contact