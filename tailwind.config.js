const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  theme: {
    colors: {
      'primary-color': '#24242C',
      'secondary-color': '#1887A3',
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