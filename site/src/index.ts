import App from "./App.svelte";
import type { ImageFormProps } from "./typing/index";

const imageFormProps: ImageFormProps = {
  width: 638,
  height: 388,
  fg: "555",
  bg: "cef",
  fmt: "png",
};

const app = new App({ target: document.body, props: { imageFormProps } });

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
