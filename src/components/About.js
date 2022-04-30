import React from 'react'
import ScrollIntoView from 'scroll-into-view'
import {AiOutlineDown} from 'react-icons/ai'

const About = () => {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black md:text-4xl font-bold text-center">
            Hey 👋
        </p>
        <p className="text-base md:text-2xl text-center text-gray-600 leading-relaxed mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illum facilis dolorum iusto facere aspernatur explicabo corrupti voluptas nostrum quos?
        </p>

        <div className="flex justify-center p-20">
            <div className="animate-bounce text-center text-3xl text-blue-500 ">
                    
                <AiOutlineDown
                />

            </div>
        </div>

    </div>

  )
}

export default About;