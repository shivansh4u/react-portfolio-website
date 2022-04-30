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
           I'm Shivam Agrawal, Currently pursuing my Bachelor's Degree of Computer Application in (Artificial intelligence & Machine learning) from Laxmi Narayan College of Technology. <br> 
           I'm a Web Developer and willing to build my Career in Web development and want to explore more in this field.
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
