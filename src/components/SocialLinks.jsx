import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {
const links = [
    {
        id:1,
        child:(
            <>LinkedIn <FaLinkedin size={30}/></>
        ),
        href:'https://www.linkedin.com/in/sneha-sahu-7117691b7/',
        style:'rounded-tr-md',
    },
    {
        id:2,
        child:(
            <>Github<FaGithub size={30}/></>
        ),
        href:'https://github.com/SnehaSahu17',
    },
    {
        id:3,
        child:(
            <>Mail <HiOutlineMail size={30}/></>
        ),
        href:'mailto:s.sneha1712@gmail.com',
        
    },
    {
        id:4,
        child:(
            <>Resume <BsPersonLinesFill size={30}/></>
        ),
        href:'#',
        style:'rounded-br-md',
        download:true,
    },
];

  return (
    <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
        <ul>
            {links.map(({id,child,href,style,download}) => (
                <li key={id} className={`bg-gray-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`} >
                <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noreferrer'>
                    {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks;