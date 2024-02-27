/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: "rgba(0,0,0,0.54)"
      }
    }
  },
  plugins: [],
}

