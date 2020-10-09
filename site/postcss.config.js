const prod = process.env.NODE_ENV === "production";

const tailwind = require("tailwindcss");

const plugins = [tailwind];
if (prod) {
  const cssNano = require("cssnano");
  plugins.push(cssNano({ preset: "default" }));
}

module.exports = { plugins };
