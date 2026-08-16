/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Roboto Condensed", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        ink: "#2d2925",
        bone: "#f5efe4",
        cream: "#fff9f0",
        muted: "#6f665e",
        wine: "#aa4956",
      },
    },
  },
  plugins: [],
};
