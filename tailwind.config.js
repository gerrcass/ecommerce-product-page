/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ["./public/**/*.html"],
  //mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  /* safelist: [
    "w-[375px]",
    "h-[300px]",
    "desktop:w-[437px]",
    "desktop:h-[437px]",
    "desktop:w-[500px]",
    "desktop:h-[500px]",
    //{
    //  pattern: /desktop:w-[(400|500)px]/,
    //  //variants: ["desktop"],
    //},
  ], */
  theme: {
    fontFamily: {
      kumbhsans: '"Kumbh Sans", sans-serif',
    },
    extend: {
      screens: {
        //desktop: "1440px", // 👈 Style guide requires widths of 1440px
        desktop: "1024px", // but we're using this one for this demo
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        primary: {
          orange: "hsl(26, 100%, 55%)",
          pale: "hsl(25, 100%, 94%)",
        },
        neutral: {
          darkblue: "hsl(220, 13%, 13%)",
          darkgrayishblue: "hsl(219, 9%, 45%)",
          grayishblue: "hsl(220, 14%, 75%)",
          lightgrayishblue: "hsl(223, 64%, 98%)",
        },
        attribution: "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};
