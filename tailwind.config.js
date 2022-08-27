/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      jost:['Jost'],
      mon:['Montserrat'],
      pop:['Poppins']
    } },
  },
  plugins: [],
}
