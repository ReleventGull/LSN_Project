/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#101419',
        textPrimary: '#ADD9F4',
        darkPrimary: '#476C9B',
        darkSecondary: '468C98'
      }
    },
  },
  plugins: [],
}

