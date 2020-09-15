const path = require("path");

const prod = process.env.NODE_ENV === "production";

const atImport = require("postcss-import");
const tailwind = require("tailwindcss");

const importConfig = { path: [path.join(__dirname, "src", "styles")] };
const plugins = [atImport(importConfig), tailwind];
if (prod) {
  const cssNano = require("cssnano");
  plugins.push(cssNano({ preset: "default" }));
}

module.exports = { plugins };
