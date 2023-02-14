/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      backgroundImage: {
        bali: "url('../img/bali.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        ìceland: "url('../img/iceland.jpg')",
        LA: "url('../img/LA.jpg')",
        miami: "url('../img/miami.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        seattle: "url('../img/seattle.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        sydney: "url('../img/sydney.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
      },
    },
  },
  plugins: [],
};
