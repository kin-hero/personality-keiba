/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // General use
        heading: ["Playfair Display", "serif"], // Headings
      },
      colors: {
        "button-color": "#251f2b",
        "button-color-hover": "#493c48",
        "container-color": "#a5a09a",
      },
    },
  },
  plugins: [],
};
