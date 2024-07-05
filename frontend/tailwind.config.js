/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
            'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    colors: {
      primary: "rgb(59 130 246)",
      secondary: "#00f6ff",
      'neutralSilver': '#F5F7FA',
      'neutralDGrey': '#4D4D4D',
      'brandPrimary': '#4CAF4F',
      'neutralGrey': '#F5F7FA',
    },
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
});