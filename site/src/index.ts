import App from "./App.svelte";

const app = new App({ target: document.body });

export default App;

console.log(new Date());

if (import.meta.env.MODE === "development") {
  if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
      app.$destroy();
    });
  }
}
