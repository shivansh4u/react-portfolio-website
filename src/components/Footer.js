import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillRedditCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-3 ">
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

      <div className="flex justify-center py-4">
        <span>
          Made with love by
          <a className="text-blue-600 font-semibold" href=""> Shivam Agarwal</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
