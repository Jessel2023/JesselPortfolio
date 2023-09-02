import React from 'react'
import ProjectItem from './ProjectItem'
import OneImg from '../assets/images/1.png'
import TwoImg from '../assets/images/2.png'
import ThreeImg from '../assets/images/3.png'
import FourImg from '../assets/images/4.png'
import FiveImg from '../assets/images/5.png'
import SixImg from '../assets/images/6.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#a6b3e3]'>
        <h1 className='text-4xl font-bold text-center text[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Officia, iste voluptatibus cumque, mollitia dicta totam, 
            quos dolor rerum officiis nesciunt voluptatum? Eos amet 
            fuga qui architecto laboriosam odio modi voluptate!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={OneImg} title='List of Trains using php'/>
        <ProjectItem img={TwoImg} title='Form Maker'/>
        <ProjectItem img={ThreeImg} title='Calculator'/>
        <ProjectItem img={FourImg} title='Facebook Clone'/>
        <ProjectItem img={FiveImg} title='Html Portfolio'/>
        <ProjectItem img={SixImg} title='Ping Pong Game OOP Project'/>
        </div>
    </div>
  
    )
}

export default Projects