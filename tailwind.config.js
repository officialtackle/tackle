/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        lato: ['Lato', 'sans-serif',],
        railway: ['Raleway', 'sans-serif'],
      },
     
    },
  },
  plugins: [],
}

