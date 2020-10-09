const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["public/**/*.html", "src/**/*.svelte"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Fira Sans"', ...fontFamily.sans],
        display: ['"Spectral"', ...fontFamily.serif],
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
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
