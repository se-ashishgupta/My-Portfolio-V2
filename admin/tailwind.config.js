/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "backPrimary-gradient":
          "linear-gradient(90deg, rgba(22, 24, 31, 1) 48%, rgba(54, 61, 61, 1) 100%)",
      },
      colors: {
        primary_color: "#07a8ad",
        secondary_color: "#16181f",

        // backPrimary_color: "#1f2937", // black white
        darkBackPrimary_color: "#1f283e", // black white
        backsecondary_color: "#f8fafc", // White
        darkBackSecondary_color: "#f8fafc", //dark White
        backteritiary_color: "#e5e7eb", // gray
        darkBackTeritiary_color: "#1a2035", //dark gray
      },
    },
  },
  plugins: [],
};
