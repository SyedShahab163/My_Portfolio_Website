import Link from "next/link";
import React from "react";

import { FaGithub, FaInstagram, FaLinkedin,FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <div className="top-[35vh] fixed">
      <Link href={"https://www.instagram.com/shahab_xaidi/"} target={"_blank"}>
  <div className=" ml-[-86px]  hover:ml-0 duration-200 flex justify-between text-lg items-center gap-[-1]
fixed text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-36 py-3 px-5 
rounded-r-lg">
    Instagram
    <AiFillInstagram size={30} />
    <br/>
  </div>
</Link>
      <Link href={"https://linkedin.com/"} target={"_blank"}>
        <div className="ml-[-86px] my-14  w-[150px] hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gradient-to-r from-cyan-500 to-blue-500  w-36 py-3 px-5 rounded-r-lg">
          Linkedin
          <FaLinkedin size={30} />
        </div>
      </Link>
      
      <Link href={"https://github.com/SyedShahab163/"} target={"_blank"}>
        <div className=" ml-[-86px] my-28  w-[150px] flex justify-between hover:ml-0 duration-200  text-lg items-center gap-2 fixed text-white bg-gradient-to-r from-gray-600 to-black w-36 py-3 px-5 rounded-r-lg">
          Github
          <FaGithub size={30} />
        </div>
      </Link>
      <br/>
{/* <Link href={"https://www.youtube.com/@syedshahabzaidi786/"} target={"_blank"}>  */}
   {/* <div className=" ml-[-86px]  hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2  */}
{/* //  fixed text-white bg-gradient-to-l from-red-500 to-pink-500 w-36 py-3 px-5   */}
{/* //  rounded-r-lg">  */}
    {/* YouTube  */}
 {/* <FaYoutube size={30} /> */}
   {/* </div>  */}
{/* </Link> */}
<br/>
<Link href={"https://www.youtube.com/@syedshahabzaidi786/"} target={"_blank"}>
    <div className=" ml-[-86px] my-28  w-[150px] flex justify-between hover:ml-0 duration-200  text-lg 
items-center gap-2 fixed text-white bg-gradient-to-r from-transparent to-red-500 w-36 py-3 px-5 
rounded-r-lg">
      YouTube
      <FaYoutube size={30} />
    </div>
  </Link>
    </div>
  );
};

export default SocialIcons;