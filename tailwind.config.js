/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
     extend: {},
     fontFamily: {
       autograph: ["'Great Vibes', cursive;"],
       naveedkipasand: ["'Cookie', cursive;"],
       transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }

     },
   },

  plugins: [],
};