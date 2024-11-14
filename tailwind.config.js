/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: {
          light: "#FFF",
          dark: "#131420",
        },
        "stabilo": '#94FE0C',
        "navi": '#111A26',
        "white-99": '#efefef',
        "blue-link": '#16A0F9',
        "ungu": '#6E62E5',
      },
    },
  },
  plugins: [],
}