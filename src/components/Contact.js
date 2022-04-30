import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Contact = () => {
  return (
   <div className="w-full text-center pt-36 pb-10 ">
       <h1 className='text-4xl'>Interesred in Working together ?</h1>
       <a href="shivansh4u1@gmail.com">
           <span className='mt-10 inline-block w-auto bg-black text-white text-base md:text-xl py-4 px-7 cursor-pointer'>
               <div className="flex flex-row items-center space-x-2">
                   <span>Get in touch</span>
                   <AiOutlineArrowRight/>
               </div>
           </span>
       </a>
   </div>
  )
}

export default Contact