module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    ["@snowpack/plugin-postcss", {}],
    [
      "@snowpack/plugin-run-script",
      { cmd: "tsc --noEmit", watch: "$1 --watch" },
    ],
    ["@snowpack/plugin-run-script", { cmd: "svelte-check" }],
    // "@snowpack/plugin-webpack",
  ],
  buildOptions: { clean: true },
  devOptions: { open: "none", secure: false },
  installOptions: {
    installTypes: true,
  },
};