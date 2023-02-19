/** @type {import('tailwindcss').Config} */
/*
* TailwindCSS Configuration File
* This file is used to configure TailwindCSS.
* content is used to tell TailwindCSS which files to scan for classes.
* theme is used to configure TailwindCSS.
* extend is used to add custom classes to TailwindCSS like fontFamily.
* here you can see I'm adding a new fontFamily called 'Comfortaa' and 'LilitaOne'.
* and I call those in the App.js file.
*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lilitaOne': ['Lilita One', 'sans-serif'],
        'Comfortaa': ['Comfortaa', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
