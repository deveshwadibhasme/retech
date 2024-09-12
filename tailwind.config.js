/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      myFont: ['Sofia Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '3xl': '0px 0px 10px skyblue',
    },
  },
  plugins: [],
}
}