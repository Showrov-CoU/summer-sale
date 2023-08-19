/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "work sans": ["Work Sans", "sans - serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
