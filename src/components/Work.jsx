import React from 'react'
import WorkItem from './WorkItem'
const data =[
    {
        year: 2021,
        title: 'Meme Creator',
        duration: '1 year',
        details: 'Won a Meme Making competion in Senior High School'
    },
    {
        year: 2022,
        title: 'Dean Lister',
        duration: '1 Semester',
        details: 'Dean Lister in my Sophomore year in first Semester'
    },
    {
        year: 2023,
        title: 'ML Player',
        duration: '2 Years',
        details: 'Participated in Mobile gaming competetion particularly in Mobile Legends Bang Bang. In an all girls competion in my first year namely the group of Legend Ghurls and also participated in Second year with a mix group of boys and girls the group named 2Rthur. Mainly a mage and support user.'
    },
    {
        year: 2023,
        title: 'GIP 2023 Graduate',
        duration: '40 days',
        details: 'Participated in an Government Internship Program for 40 days. Become an Intern in SSS Lapasan Branch where I have learned many valuable experiences and lessons. Where real world scenario has been experienced first hand. I am forever grateful for the opportunity and privelleged that has been granted to me.'
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] p-4'>Works and Experience</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            />
        ))}
    </div>
  )
}

export default Work