const prod = process.env.NODE_ENV === "production";

const postCSSImport = require("postcss-import");
const tailwindCSS = require("tailwindcss");

const plugins = [postCSSImport({ path: ["src/styles"] }), tailwindCSS];
if (prod) {
  const presetEnv = require("postcss-preset-env");
  const cssNano = require("cssnano");
  plugins.push(presetEnv({ stage: 3 }), cssNano({ preset: "default" }));
}

module.exports = { plugins };
