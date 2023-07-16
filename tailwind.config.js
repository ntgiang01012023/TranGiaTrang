/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'textBlack': '#00000',
        'textBlack1': '#817D7F',
        'textGray1': '#D5D5D5',
        'textGray2': '#b5c2ca',
        'textGray3': '#f6f9fa',
        'shadow': '#e0e1e580',
        'blueMain': '#AADCE9',
        'redMain': '#FF595F',
        'greenMain': '#158A77',
        'green2': '#DBF9F4',
        'red2': '#FF8E91',
        'yellow': 'CFC9AC',
      },
      backgroundImage: {
        'heroPattern': "url('/commercial-image.webp')",
      },
      theme: {
        screens: {
          'xs': '300px',
        }
      }
    },
  },
  plugins: [],
}