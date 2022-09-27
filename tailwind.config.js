/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/*.vue",
    "./pages/*.vue",
    "./nuxt.config.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
