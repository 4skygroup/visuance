/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-red-strong-light": "#E82020",
        "gradient-red-strong-light-stop": "70%",
        "gradient-red-strong-dark": "#821212",
        "gradient-red-light": "#E06387",
        "gradient-red-dark": "#840F15",
        "gradient-orange-light": "#E07263",
        "gradient-orange-dark": "#935148",
        "gradient-blue-light": "#638FE0",
        "gradient-blue-light-stop": "57%",
        "gradient-blue-dark": "#2E3A50",
        "gradient-blue-dark-stop": "75%",
        // "gradient-brown-dark": "",
        "gradient-green-light": "#00A29D",
        "gradient-green-dark": "#00989D",
        "visuance-gradient-blue": "#0D15AA",
        "brown-light": "#5D341A",
        "light-gray": "#DEDEDE",
        "dark-gray": "#84888F",
      },
      fontFamily: {
        sans: ["Glacial Indifference", "sans-serif"],
        glacial: ["Glacial Indifference", "sans-serif"],
      },
      screens: {
        xs: "30rem",
        high: { raw: "(max-aspect-ratio: 1/1)" },
      },
    },
  },
  plugins: [],
};
