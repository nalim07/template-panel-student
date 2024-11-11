/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FFF",
          dark: "#131420",
        },
        stabilo: "#94FE0C",
        navi: "#111A26",
        "white-99": '#efefef',
        "blue-link": "#16A0F9",
      },
    },
  },
  plugins: [],
}