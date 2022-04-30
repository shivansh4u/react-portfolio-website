import React from "react";

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillRedditCircle, AiFillYoutube} from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center   max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 ">
        <div className="">
          <img
            className="w-32 mx-auto  shadow-xl rounded-full drop-shadow-sm"
            src={require("../images/animoji.png")}
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Shivam Agarwal</p>

          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5  w-auto inline-block border-b-2 ">
            FrontEnd Developer / YouTuber
          </p>

          <div className="flex align-middle justify-center mt-4">
            <a
              href=""
              className="text-xl m-1 p-1 sm:m-2 text-purple-900 hover:bg-purple-900  rounded-full hover:text-white transition-colors"
            >
              <AiFillGithub />
              <span class="sr-only">Github</span>
            </a>
            
            <a
              href=""
              className="text-xl m-1 p-1 sm:m-2 text-blue-800 hover:bg-blue-800  rounded-full hover:text-white transition-colors"
            >
              <AiFillLinkedin />
              <span class="sr-only">Github</span>
            </a>

            <a
              href=""
              className="text-xl m-1 p-1 sm:m-2 text-orange-600 hover:bg-orange-600  rounded-full hover:text-white transition-colors"
            >
              <AiFillRedditCircle />
              <span class="sr-only">Github</span>
            </a>

            <a
              href=""
              className="text-xl m-1 p-1 sm:m-2 text-blue-500 hover:bg-blue-500  rounded-full hover:text-white transition-colors"
            >
              <AiOutlineTwitter />
              <span class="sr-only">Github</span>
            </a>


            <a
              href=""
              className="text-xl m-1 p-1 sm:m-2 text-red-600 hover:bg-red-600  rounded-full hover:text-white transition-colors"
            >
              <AiFillYoutube />
              <span class="sr-only">Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
