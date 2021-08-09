module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00194c",
        secondary: "#e4e4e4", // #eab200 or #cca13a is light yellow or #e4e4e4 is light gray
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
