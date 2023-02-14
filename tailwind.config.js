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
        bali: "url('./public/img/bali.jpg')",
        chicago: "url('./public/img/chicago.jpg')",
        europe: "url('./public/img/europe.jpg')",
        ìceland: "url('./public/img/iceland.jpg')",
        LA: "url('./public/img/LA.jpg')",
        miami: "url('./public/img/miami.jpg')",
        new_york: "url('./public/img/new_york.jpg')",
        norway: "url('./public/img/norway.jpg')",
        sanFrancisco: "url('./public/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('./public/img/sanFranciscoDesktop.jpg')",
        seattle: "url('./public/img/seattle.jpg')",
        switzerland: "url('./public/img/switzerland.jpg')",
        sydney: "url('./public/img/sydney.jpg')",
        yosemite: "url('./public/img/yosemite.jpg')",
      },
    },
  },
  plugins: [],
};
