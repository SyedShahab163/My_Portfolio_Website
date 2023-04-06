
 

import Image from "next/image";
import React from "react";
import { FaGithub, FaHtml5 } from "react-icons/fa";

export const Skills = () => {
  return (
    <div
      className="flex items-center mx-auto mb-10 leading-8 max-w-7xl"
      id="skills"
    >
      <div className="px-10 mx-auto mt-32 ">
        <h1 className="mb-10 text-4xl text-center text-white">Skills</h1>

        <div className="grid grid-cols-3 gap-20 sm:grid-cols-4 md:grid-cols-5">
          {/* skill 1 */}
          <div className="p-5 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              className="object-contain w-20 h-20 duration-700 hover:translate-y-2 hover:scale-110 "
            />
            <p className="mt-4 text-center text-white">Html</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              className="object-contain w-20 h-20 duration-700 hover:-translate-y-2 hover:scale-110"
            />
            <p className="mt-4 text-center text-white">CSS</p>
          </div>
          {/* 2 ends  */}

          <div className="p-5 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              className="object-contain w-20 h-20 duration-700 hover:-translate-x-2"
            />
            <p className="mt-4 text-center text-white">Javascript</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
              className="object-contain w-20 h-20 duration-700 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-white">React</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5 ">
            <img
              src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
              className="object-contain w-20 h-20 duration-700 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-white">NextJS 13</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              className="object-contain w-20 h-20 duration-700 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-white">Tailwind</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5 ">
            <img
              src="https://servicenav.coservit.com/wp-content/uploads/2022/05/18-1.jpg"
              className="object-contain w-20 h-20 duration-700 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-white">MongoDb</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              className="object-contain w-20 h-20 duration-700 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-white">NodeJS</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5 ">
            <img
              src="https://www.zend.com/sites/default/files/styles/social_preview_image/public/image/2020-04/image-blog-mysql-php.jpg?itok=j341L3Fk"
              className="object-contain w-20 h-20 duration-700 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-white">mySql</p>
          </div>
          {/* 1 ends  */}
          <div className="p-5 ">
            <img
              src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/typescript-logo.png?fit=1200%2C600&ssl=1"
              className="object-contain w-20 h-20 duration-700 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-white">Typescript</p>
          </div>
          {/* 1 ends  */}
        </div>
      </div>
    </div>
  );
};