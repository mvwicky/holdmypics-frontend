const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["site/**/*.md", "site/**/*.njk", "site/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fira Sans"', ...fontFamily.sans],
        body: ['"Spectral"', ...fontFamily.serif],
      },
    },
    fontFamily: {
      sans: ['"Fira Sans"', ...fontFamily.sans],
      serif: ['"Spectral"', ...fontFamily.serif],
      mono: ['"IBM Plex Mono"', ...fontFamily.mono],
    },
    container: {
      padding: {
        default: "1.5rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
