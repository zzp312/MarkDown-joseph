/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#1a1a1a',
        'panel-bg': '#2d2d2d',
        'accent': '#00ff00',
        'border': '#3d3d3d',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}