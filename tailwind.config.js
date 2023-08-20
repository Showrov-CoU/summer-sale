/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ws: ["Work Sans", "sans - serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
