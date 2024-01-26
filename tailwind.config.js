/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",

		//root index files add this
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily : {
        Jost : ['Jost']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

