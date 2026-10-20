/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#07896F",
          dark: "#086B59",
          light: "#DDF5EC",
        },
        ink: "#124A43",
      },
    },
  },
  plugins: [],
};