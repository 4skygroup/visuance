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
      fontSize: {
        // Titles
        h1: "8rem",
        h2: "6rem",
        h3: "5rem",
        h4: "4rem",
        h5: "3rem",
        h6: "2.25rem",
        h7: "1.5rem",

        // Texts
        t1: "2rem",
        t2: "1.75rem",
        t3: "1.5rem",
        t4: "1.25rem",
        t5: "1rem",
        t6: "0.75rem",
        t7: "0.625rem",

        // Pour rendre la police Bold, il faut utiliser: font-bold
      },
      screens: {
        xs: "30rem",
        high: { raw: "(max-aspect-ratio: 1/1)" },
      },
      width: {
        "8/10": "80%",
      },
      borderRadius: {
        r1: "1.875rem",
        r3: "0.9375rem",
      },
    },
  },
  plugins: [],
};
