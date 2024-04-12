/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
        name:["EB Garamond", "serif"],
      },
      colors: {
        primary: "#391864",
        secondary: "#8874a2",
        BrandColor: "",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm:"2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}

