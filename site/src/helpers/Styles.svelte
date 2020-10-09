<style global>
  @tailwind base;

  @font-face {
    font-display: fallback;
    font-family: "Fira Sans";
    font-style: normal;
    font-weight: 400;
    src: url(/static/fonts/fira-sans/fira-sans-v9-regular.woff2) format("woff2"),
      url(/static/fonts/fira-sans/fira-sans-v9-regular.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: "Fira Sans";
    font-style: normal;
    font-weight: 600;
    src: url(/static/fonts/fira-sans/fira-sans-v9-600.woff2) format("woff2"),
      url(/static/fonts/fira-sans/fira-sans-v9-600.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: "Fira Sans";
    font-style: normal;
    font-weight: 700;
    src: url(/static/fonts/fira-sans/fira-sans-v9-700.woff2) format("woff2"),
      url(/static/fonts/fira-sans/fira-sans-v9-700.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: "Fira Sans";
    font-style: italic;
    font-weight: 400;
    src: url(/static/fonts/fira-sans/fira-sans-v9-italic.woff2) format("woff2"),
      url(/static/fonts/fira-sans/fira-sans-v9-italic.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: "Spectral";
    font-style: normal;
    font-weight: 400;
    src: url(/static/fonts/spectral/spectral-v6-regular.woff2) format("woff2"),
      url(/static/fonts/spectral/spectral-v6-regular.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: "Spectral";
    font-style: normal;
    font-weight: 700;
    src: url(/static/fonts/spectral/spectral-v6-700.woff2) format("woff2"),
      url(/static/fonts/spectral/spectral-v6-700.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: "Spectral";
    font-style: italic;
    font-weight: 400;
    src: url(/static/fonts/spectral/spectral-v6-italic.woff2) format("woff2"),
      url(/static/fonts/spectral/spectral-v6-italic.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: "Spectral";
    font-style: normal;
    font-weight: 200;
    src: url(/static/fonts/spectral/spectral-v6-200.woff2) format("woff2"),
      url(/static/fonts/spectral/spectral-v6-200.woff) format("woff");
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  footer {
    @apply font-display;
  }

  h1 {
    @apply text-5xl;
  }

  h2 {
    @apply text-4xl;
  }

  h3 {
    @apply text-3xl;
  }

  h4 {
    @apply text-2xl;
  }

  h5 {
    @apply text-xl;
  }

  h6 {
    @apply text-base font-bold;
  }

  body {
    @apply text-base font-body;
  }

  @tailwind components;
  @tailwind utilities;
</style>
