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
        bali: "url('https://amauridev.me/PlatziTravel/public/img/bali.jpg')",
        chicago:
          "url('https://amauridev.me/PlatziTravel/public/img/chicago.jpg')",
        europe:
          "url('https://amauridev.me/PlatziTravel/public/img/europe.jpg')",
        ìceland:
          "url('https://amauridev.me/PlatziTravel/public/img/iceland.jpg')",
        LA: "url('https://amauridev.me/PlatziTravel/public/img/LA.jpg')",
        miami: "url('https://amauridev.me/PlatziTravel/public/img/miami.jpg')",
        new_york:
          "url('https://amauridev.me/PlatziTravel/public/img/new_york.jpg')",
        norway:
          "url('https://amauridev.me/PlatziTravel/public/img/norway.jpg')",
        sanFrancisco:
          "url('https://amauridev.me/PlatziTravel/public/img/sanFrancisco.jpg')",
        sanFranciscoDesktop:
          "url('https://amauridev.me/PlatziTravel/public/img/sanFranciscoDesktop.jpg')",
        seattle:
          "url('https://amauridev.me/PlatziTravel/public/img/seattle.jpg')",
        switzerland:
          "url('https://amauridev.me/PlatziTravel/public/img/switzerland.jpg')",
        sydney:
          "url('https://amauridev.me/PlatziTravel/public/img/sydney.jpg')",
        yosemite:
          "url('https://amauridev.me/PlatziTravel/public/img/yosemite.jpg')",
      },
    },
  },
  plugins: [],
};
