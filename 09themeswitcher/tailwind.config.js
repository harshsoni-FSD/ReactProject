/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class", //tailwind me configuration krt=ni hoti h abhi tk hm boilerplate configuration kr rhe the
  //html se aane vali functionality ko enable krne ke liye tailwind me ek mode hota hh darkmode 
  theme: {
    extend: {},
  },
  plugins: [],
}

