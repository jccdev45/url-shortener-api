module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "boost-desktop": "url('/src/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('/src/images/bg-boost-mobile.svg')",
        "shorten-desktop": "url('/src/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/src/images/bg-shorten-mobile.svg')",
      }),
      colors: {
        primary: {
          cyan: `hsl(180, 66%, 49%)`,
          darkViolet: `hsl(257, 27%, 26%)`,
        },
        secondary: {
          red: `hsl(0, 87%, 67%)`,
        },
        neutral: {
          gray: `hsl(0, 0%, 75%)`,
          grayViolet: `hsl(257, 7%, 63%)`,
          darkBlue: `hsl(255, 11%, 22%)`,
          darkViolet: `hsl(260, 8%, 14%)`,
        },
      },
      fontFamily: {
        serif: ["Poppins", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
