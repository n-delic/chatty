/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./index.html",
        './src/**/*.{js,ts,vue}'
    ],
  theme: {
    container: {
      padding: '2rem',
    },
    colors: {
      'indigo': '#03045e',
      'darkBlue': '#023e8a',
      'slightDarkBlue': '#0077b6',
      'white': '#ffffff'
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins','sans-serif']
      },
    },
  },
  plugins: [],
}
