/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
      },
      colors: {
        gold: '#D4AF37',
        champagne: '#F3E5AB',
        antiqueGold: '#C5A059',
        silver: '#9CA3AF',
        bronze: '#926036',
        sareeMaroon: '#780016',
        sareeCrimson: '#B91C1C',
        sareeIndigo: '#1E3A8A',
        sareeEmerald: '#15803D',
        sareeGold: '#EAB308',
      },
    },
  },
  plugins: [],
}
