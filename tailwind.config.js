// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        display: [
          "Cormorant Garamond",
          "serif",
        ],

        body: [
          "Inter",
          "sans-serif",
        ],
      },

      screens: {
        xs: "375px",
      },
    },
  },

  plugins: [],
};