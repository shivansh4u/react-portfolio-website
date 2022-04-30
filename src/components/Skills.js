import React from 'react'
import {FaReact, FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs, SiJavascript } from 'react-icons/si'

const Skills = () => {
  return (

    <div className="text-center  py-12 " id='tech'>
        <p className="text-2xl text-black sm:text-4xl font-bold pt-4">
            Tech I Use
        </p>
        <div className="flex flex-wrap justify-center pt-2">

             <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl "> 
                <FaReact className='mx-auto text-3xl sm:text-4xl text-blue-500'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>React</p>
            </div>    


            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl "> 
                <SiNextdotjs className='mx-auto text-2xl sm:text-4xl text-neutral-800'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Next JS</p>
            </div>


             <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl "> 
                <SiTailwindcss className='mx-auto text-3xl sm:text-4xl text-cyan-500'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Tailwind</p>
            </div>      

            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl "> 
                <FaBootstrap className='mx-auto text-2xl sm:text-4xl text-purple-700'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Bootstrap</p>
            </div>  

            <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl "> 
                <SiJavascript className='mx-auto text-2xl sm:text-4xl text-yellow-400'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>JavaScript</p>
            </div>  

           

        </div>
    </div>

  )
}

export default Skills