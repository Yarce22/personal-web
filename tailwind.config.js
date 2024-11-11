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
        'banner': "url(/src/assets/foto-perfil.webp)"
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

