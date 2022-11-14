/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode : "class",
  theme: {
    extend: {
      container : {
        center : true
      },
      colors: {
        "dark-blue" : "#052439",
        "m-mid-blue" : "#0a283f",
        "s-light-blue" : "#45B9FF",
        "white" : "#FFFFFF",
        "s-mid-blue" : "#0E3453",
        "m-light-blue" : "#3A9EDC",
        "mid-white" : "#EFF3F4",
        "dark-white" : "#EBEBEB",
        "dark-gray" : "#383838",
        "light-gray" : "#636363",
        "x-dark-white" : "#aba6a6"
      },
      fontFamily : {
        "vazir" : "vazir"
      },
      spacing : {
        "custom" : "430px",
        "main-full" : "500px"
      },
      maxHeight : {
        "custom" : "430px",
        "main-full" : "500px"
      }
    },
  },
  plugins: [],
}
