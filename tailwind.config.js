/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      ...require('tailwindcss/colors'),
      'DarkerColor': '#22577A',
      'MainColor': '#38A3A5',
      'TextColor': '#57CC99',
      'MiddleColor': '#80ED99',
      'LightColor': '#c7facc',
      'BlackS': '#1C2924',
    },
    extend: {},
  },
  plugins: [],
}

