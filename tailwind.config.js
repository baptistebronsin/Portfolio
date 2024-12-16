const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  theme: {
    colors: {
      'primary-color': '#24242C',
      'secondary-color': '#cc388d',
      'tertiary-color': '#ADADAD',
      'custom-grey': '#DADADA'
    },
  },
  content: [
    "./app.vue",
    "./error.vue",
    "./components/**/*.vue",
  ],
  plugins: [],
}