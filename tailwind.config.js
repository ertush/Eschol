module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00194c",
        secondary: "#eab200",
        "primary-accent": "#014067",
        "secondary-accent": "#a5a5a5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
