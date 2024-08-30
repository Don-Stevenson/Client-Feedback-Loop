/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lavender-web': '#d8ddef',
        'cool-gray': '#a0a4b8',
        'air-force-blue': '#7293a0',
        keppel: '#45b69c',
        mint: '#21d19f',
      },
    },
  },
  plugins: [],
}
