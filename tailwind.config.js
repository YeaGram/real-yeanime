/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
      },
      fontFamily: {
        Poppins: "Poppins",
        SourceSans: "Source Sans Pro",
      },
      transitionTimingFunction: {
        uwis: "cubic-bezier(.64,.46,.13,.95)",
      },
    },
  },
  plugins: [],
};
