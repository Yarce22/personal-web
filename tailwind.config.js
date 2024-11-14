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
        'banner-lg': "url(/src/assets/banner.webp)"
      },
      colors: {
        Green: "#859F3D",
        bgBanner: "#2d2e31",
        bgBody: "#25262a",
      },
      "border-color": {
        Green: "#859F3D",
      },
      background: {
        'custom-gradient': 'linear-gradient(315deg, rgba(0,0,0,1) 0%, rgba(55,57,61,1) 30%, rgba(87,90,98,1) 100%)',
      },
    },
  },
  plugins: [],
}

