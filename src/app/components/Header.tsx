"use client"
import Link from 'next/link';
import React ,{useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
     <section className='text-black bg-gradient-to-r from-cyan-500 to-blue-500 '>
<div className="flex items-center justify-between">     
  <h1 className="m-7 font-autograph hover:scale-150">portfolio</h1>
  <ul className="hidden m-7 md:flex ">
  <a className="cursor-pointer" href="#home">
    <li className="mx-6 text-3xl duration-500 font-naveedkipasand hover:scale-150">
      Home</li>
      </a>
      <a className="cursor-pointer" href="#about">
    <li className="mx-6 text-3xl duration-500 font-naveedkipasand hover:scale-150">
      About</li>
      </a>
      <a className="cursor-pointer" href="#portfolio">
    <li className="mx-6 text-3xl duration-500 font-naveedkipasand hover:scale-150">
    portfolio</li>
      </a>
    <a className="cursor-pointer" href="#skills">
      
    <li className="mx-6 text-3xl duration-500 font-naveedkipasand hover:scale-150">
      Skill</li>
    
      </a>
    <a className="cursor-pointer" href="#contact">
    <li className="mx-6 text-3xl duration-500 font-naveedkipasand hover:scale-150">
      Contact</li>
    </a>
  </ul>
  <div className="z-10 pr-5 md:hidden"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }} >
  {toggle ?<GiHamburgerMenu size={30}/> : <RxCross2 size={30}/>}
  </div>
  {/* {overlay starts here } */}
  {!toggle ? (
  <div className='fixed top-0 left-0 flex items-center justify-center w-full h-screen text-red-500 bg-black' >
  <ul className="text-white m-7">
  <li className="mx-5 my-2 text-5xl font-naveedkipasand ">
    Home</li>
  <li className="mx-5 my-2 text-5xl font-naveedkipasand">
    About</li>
  <li className="mx-5 my-2 text-5xl font-naveedkipasand">
    Protfoli</li>
  <li className="mx-5 my-2 text-5xl font-naveedkipasand">
    Skill</li>
  <li className="mx-5 my-2 text-5xl font-naveedkipasand">
    Contact</li>
</ul>
  </div>
  ): null  }
  {/* {overlay end here } */}
</div>
</section>
    </>
  )
}

export default Header