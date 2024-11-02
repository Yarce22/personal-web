/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: "'Kanit', sans-serif;",
        Roboto: "'Roboto Slab', serif"
      },
      backgroundImage: {
        'banner': "url(/src/assets/40158c5333b4dbd4b76c9325c7baddc.webp)"
      },
      colors: {
        Green: "#859F3D",
        bgBanner: "#2d2e31",
        bgBody: "#25262a",
      }
    },
  },
  plugins: [],
}

