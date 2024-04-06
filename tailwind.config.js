/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}

