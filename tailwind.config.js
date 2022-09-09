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
      'primary': '#ffffff',
      'secondary': '#003049',
      'teritary': '#d62828',
      'fourth': '#9d0208',
      'shadow': '#7d7d7d',
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
