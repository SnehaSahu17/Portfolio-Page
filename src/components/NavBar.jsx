import React from 'react';
import { useState } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {

const [nav,setNav] = useState(false);

const links = [
    {
        id:1,
        link:'home',
    },
    {
        id:2,
        link:'about',
    },
    {
        id:3,
        link:'portfolio',
    },
    {
        id:4,
        link:'experience',
    },
    {
        id:5,
        link:'contact',
    },
];

  return (
    <div className="flex bg-black w-full h-20 px-4 fixed items-center justify-between text-white "> 

         <h1 className=' font-signature text-5xl ml-2'>Sneha</h1>

         <ul className='hidden md:flex'>
            {links.map(({id,link}) => (
            <li key={id} className='text-gray-500 capitalize px-4 cursor-pointer font-medium hover:scale-110 duration-200'>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
         </ul>
         
         <div onClick={() => setNav(!nav)} className='cursor-pointer text-gray-500 pr-4 z-10 md:hidden'>
               {nav ?  <FaTimes size={30}/> :  <FaBars size={30}/>}
         </div>
        
        {nav && (
             <ul className='flex flex-col text-gray-500 justify-center items-center absolute w-full  left-0 top-0  bg-gradient-to-b from-black to-gray-800'>
             {links.map(({id,link}) =>(
                 <li key={id} className='px-4 py-6 cursor-pointer capitalize text-4xl'>
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                 </li>
             ))}
            </ul>
        )}
    </div>
        
  );
};

export default NavBar;