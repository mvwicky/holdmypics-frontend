import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: { appTitle: "Hold My Pics", imageCount: 4500 },
});

export default App;

if (import.meta.env.MODE === "development") {
  if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
      app.$destroy();
    });
  }
}
