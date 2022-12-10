import React from 'react'
import heroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='w-full min-h-screen sm:h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className=' max-w-screen-lg h-full mx-auto px-4 flex flex-col items-center justify-center  md:flex-row '>
            
            <div className='flex flex-col justify-center h-full'>
                <p className='text-4xl sm:text-7xl font-bold text-white mt-24 sm:mt-5'>Hi! I'm a Fronted Developer</p>

                <p className='text-gray-500 py-4 max-w-md'>Currently, I love to work on web applications using
                   technologies like
                   React,Tailwind and Next JS</p>

                <div>
                    <Link to='portfolio' smooth duration={500}  className='text-white w-fit flex items-center px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor pointer group'>
                        Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>   
                    </Link>
                </div>  
            </div>

            <div>
            <img src={heroImage} alt="My Profile" className=' rounded-2xl mx-auto sm:w-2/3 w-full h-fit  ' />
            </div>
        </div>

    </div>
  )
}

export default Home;