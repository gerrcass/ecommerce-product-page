/** @type {import('tailwindcss').Config} */
module.exports = {
  //mode:'jit',
  //purge:['./public/**/*.html'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      kumbhsans: '"Kumbh Sans", sans-serif'
    },
    extend: {
      screens: {
        'desktop': '1440px', // => @media (min-width: 1440px) { ... }
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        primary: {
          orange: 'hsl(26, 100%, 55%)',
          pale: 'hsl(25, 100%, 94%)'
        },
        neutral: {
          darkblue: 'hsl(220, 13%, 13%)',
          darkgrayishblue: 'hsl(219, 9%, 45%)',
          grayishblue: 'hsl(220, 14%, 75%)',
          lightgrayishblue: 'hsl(223, 64%, 98%)',
        },
        attribution: 'hsl(228, 45%, 44%)'
      },
    },
  },
  plugins: [],
}