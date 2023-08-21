/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ws: ["Work Sans", "sans - serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
