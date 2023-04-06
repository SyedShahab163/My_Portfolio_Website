import Image from "next/image"
import { MdArrowRight } from 'react-icons/md';
const HomeHero = () => {
  return (
    <section className="flex flex-col mx-auto mt-16 m-9 max-w-7xl mt-14 md:flex-row">
        {/* <left  start here */}
  <div>
    <h1 className="text-blue-500 transition-all transition transform font-autograph" >I am Full Stack Developer</h1>

    <p className="flex items-center max-w-3xl mx-auto leading-9 text-justify text-white">I am a web developer, you likely have a solid understanding of how the traditional web operates, with data stored on centralized servers and accessed through HTTP requests. However, blockchain technology and the concept of Web 3.0 are changing the way we interact with and access information on the web.</p>
<button className="group flex justify-center items-center  px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 ... rounded-lg">Profile
<MdArrowRight size={25} className="duration-500 group-hover:rotate-90"/>
</button> 
</div>
{/* /* [left ends here] 
 {/* right  */}
<div className="max-w-lg p-5 ">

</div>

<div> 
     <Image src="/pic.png"alt="Picture of the author"width="500"
  height="500" className="w-1/2 mx-auto md:w-full hover:scale-150"/>
</div>
    </section>
    // 
  )
}

export default HomeHero