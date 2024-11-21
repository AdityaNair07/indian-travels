/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundClip: ["text"],
      colors: {
        primary: "#ff6d38",
        secondary: "#eff3f8",
        white: "#fff",
        my_blue: "#293c86",
        my_black: "#191e24",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
