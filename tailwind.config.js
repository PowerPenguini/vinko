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
        ink: "#090807",
        coal: "#14100e",
        bone: "#f5eee3",
        muted: "#c8b8a4",
        wine: "#8f1d2c",
        olive: "#818046",
      },
      boxShadow: {
        glow: "0 24px 70px rgba(143, 29, 44, 0.22)",
      },
    },
  },
  plugins: [],
};
