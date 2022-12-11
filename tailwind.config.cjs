/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      "base": ['18px', '24px'],
      "lg": ['24px', '30px'],
      "xl": ['32px', '38px'],
      "2xl": ['48px', '54px'],
      "3xl": ['72px', '78px'],
    },
    extend: {},
  },
  plugins: [],
}
