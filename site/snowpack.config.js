const prod = process.env.NODE_ENV === "production";
const USE_TSC = Boolean(process.env.USE_TSC);

const TSC_PLUGIN = [
  "@snowpack/plugin-run-script",
  { cmd: "tsc --noEmit", watch: "$1 --watch" },
];

module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    ["@snowpack/plugin-postcss", {}],
    USE_TSC ? TSC_PLUGIN : undefined,
    ["@snowpack/plugin-run-script", { cmd: "svelte-check" }],
    // "@snowpack/plugin-webpack",
  ].filter((elem) => elem !== undefined),
  buildOptions: { clean: true },
  devOptions: { open: "none", secure: false, port: 9091 },
  installOptions: {
    installTypes: true,
  },
};
