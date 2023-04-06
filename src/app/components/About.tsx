import React from "react";
import Image from "next/image"
export default function About() {
  return (
    <div>
      <div
        className="flex items-center max-w-4xl mx-auto leading-10 text-justify "
        id="about"
      >
        <div className="px-10 mt-10 text-white">
          <h1 className="mb-10 text-4xl text-center text-white">About Me</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            suscipit quidem neque dolorem similique sapiente eveniet, sit
            pariatur, quam alias at ipsam! Illo mollitia dicta fugit voluptates
            consectetur nesciunt quo minima repudiandae unde, nisi culpa
            cupiditate, aliquam sint velit tenetur saepe hic ex nemo ipsa quae
            tempore natus. Commodi assumenda nesciunt ullam voluptatibus!
            Consectetur accusantium non odit blanditiis libero deleniti sequi
            accusamus cum, illo aliquam veniam dicta quas sit et, temporibus
            quas inventore earum quibusdam quidem quos molestias similique
          </p>
        </div>
        <br/>
        {/* <div>  */}
       {/* <Image src="/sha.jpg"alt="Picture of the author"width="5000" */}
        {/* // height="1000" className="w-1/2 mx-auto md:w-full hover:scale-150"/> */}
       {/* </div> */}
      </div>
    </div>
  );
}