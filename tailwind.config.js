/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
import { nextui } from '@nextui-org/react';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    light: {
      // ...
      colors: {},
    },
    dark: {
      // ...
      colors: {
        background: "#000000", // or DEFAULT
        foreground: "#ECEDEE", // or 50 to 900 DEFAULT
        primary: {
          //... 50 to 900
          foreground: "#262626",
          default: "#006FEE",
        }
      },
    }
  },
  
  plugins: [
    withMT,
    nextui(),
    require('@tailwindcss/typography'),
  ],
}

