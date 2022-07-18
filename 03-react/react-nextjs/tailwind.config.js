/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');
// wrap your config with konstaConfig
module.exports = konstaConfig(
    {
      // rest of your usual Tailwind CSS config here
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
);
