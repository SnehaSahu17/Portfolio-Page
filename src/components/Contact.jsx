import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full min-h-screen sm:h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='flex flex-col justify-center  p-4 mx-auto max-w-screen-lg h-full '>
            <div className='text-white pb-8 mt-16 sm:mt-5'>
                <h6 className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</h6>
                <p className='py-6'>Submit the form to get in touch with me</p>
            </div>

            <div  className='flex justify-center item-center'>
                <form action="https://getform.io/f/769c1f85-b804-48db-9002-5d67f28cc998" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="email" name="email" placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact