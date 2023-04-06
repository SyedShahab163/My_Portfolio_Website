
import React from "react";

export default function Contact() {
  return (
    <div>
      <div
        className="flex items-center mx-auto mb-10 leading-8 max-w-7xl"
        id="contact"
      >
        <div className="px-10 mx-auto mt-32 text-gray-500">
          <h1 className="text-4xl text-center text-white ">Contact</h1>
          <p className="my-5 text-center text-white">Get in touch with me</p>
          <form action="https://formspree.io/f/mdovwjvy" method="POST">
            <div>
              <input
                placeholder="Your name"
                type="text"
                required
                name="name"
                className="p-2 text-white bg-transparent border-2 rounded-md w-80 focus:outline-none"
              />
            </div>
            <div className="my-5">
              <input
                required
                className="p-2 text-white bg-transparent border-2 rounded-md w-80 focus:outline-none"
                placeholder="Your email"
                type="email"
                name="email"
              />
            </div>
            <div>
              <textarea
                rows={8}
                name="meraMessage"
                required
                className="p-2 text-white bg-transparent border-2 rounded-md w-80 focus:outline-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="block px-5 mx-auto text-black rounded-md bg-gradient-to-b from-gray-300 to-gray-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}