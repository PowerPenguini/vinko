/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Roboto Condensed", "Arial Narrow", "Arial", "sans-serif"],
        body: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#241815",
        coal: "#fff6e5",
        bone: "#fffaf0",
        cream: "#fff3d8",
        straw: "#f8d982",
        muted: "#806d5d",
        wine: "#8f1d2c",
        accent: "#d44f5f",
        olive: "#5f7f35",
        leaf: "#7aa342",
        sky: "#7fc7ee",
      },
    },
  },
  plugins: [],
};
