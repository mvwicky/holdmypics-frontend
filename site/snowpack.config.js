const plugins = [
  [
    "@snowpack/plugin-build-script",
    { cmd: "postcss", input: [".css"], output: [".css"] },
  ],
  ["@snowpack/plugin-svelte", {}],
  "@snowpack/plugin-typescript",
  [
    "@snowpack/plugin-run-script",
    {
      cmd: "svelte-check --output human",
      watch: "$1 --watch",
      output: "stream",
    },
  ],
  ["@snowpack/plugin-webpack", { htmlMinifierOptions: false }],
];

module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins,
  buildOptions: { clean: true },
  devOptions: { open: "none", secure: false, port: 9091 },
  installOptions: {
    installTypes: true,
    env: { NODE_ENV: true },
  },
};
