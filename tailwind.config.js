  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        playbar: '#06070E',
        backgroundPrimary: '#101419',
        textPrimary: '#ADD9F4',
        darkPrimary: '#476C9B',
        darkSecondary: '468C98',
        backgroundSecondary: '#1A1B24',
        backgroundThird: '#2E2F3A',
        backgroundFourth: '#6C6D7A',
        backgroundFifth: '#B1B3C0'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
    require('@tailwindcss/line-clamp')
  ],
}

