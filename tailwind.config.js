module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00194c",
        secondary: "#e4e4e4", // #eab200 or #cca13a is light yellow or #e4e4e4 is light gray #a0b4c9 is sky blue
        "primary-accent": "#014067",
        "secondary-accent": "#384572",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
