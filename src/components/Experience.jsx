import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import github from '../assets/github.png'


const Experience = () => {

const tech = [
    {
        id:1,
        src:html,
        name:"html",
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        name:"css",
        style:'shadow-blue-500'
    },
    {
        id:3,
        src:js,
        name:"javascript",
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:react,
        name:"react",
        style:'shadow-blue-600'
    },
    {
        id:5,
        src:nextjs,
        name:"next js",
        style:'shadow-white'
    },
    {
        id:6,
        src:tailwind,
        name:"tailwind css",
        style:'shadow-sky-400'

    },
    {
        id:7,
        src:node,
        name:"node js",
        style:'shadow-green-500'
    },
    {
        id:8,
        src:github,
        name:"github",
        style:'shadow-gray-400'
    },
];

  return (
    <div name="experience" className='w-full sm:h-screen min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>

            <div className='mt-16 sm:mt-5'> 
                <h5 className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</h5>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>

            <div className=' w-full grid sm:grid-cols-3 grid-cols-2 gap-8 px-12 sm:px-0 py-8 text-center'>
                {
                    tech.map(({id,src,name,style}) =>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                          <img src={src} alt="" className='w-20 mx-auto'/>
                          <p className='mt-4 uppercase'>{name}</p>
                        </div>
                 ))}
            </div>

        </div>

    </div>
  )
}

export default Experience