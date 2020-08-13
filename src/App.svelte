<script lang="ts">
  import Row from "./components/Row.svelte";
  import ImageForm from "./components/ImageForm.svelte";
  export let appTitle: string = "Hold My Pics";
  export let imageCount: number = 0;

  let imgCountStr = imageCount.toLocaleString(undefined, {
    style: "decimal",
    maximumFractionDigits: 0,
  });
</script>

<style>
  /* :global(body) {
    font-family: "Fira Sans";
  } */
  /* :global(header, footer, h1, h2, h3, h4, h5, h6) {
    font-family: "Spectral";
  } */
  .App {
    @apply w-full;
    @apply min-h-screen;
  }
  .AppInner {
    @apply border-r;
    @apply border-l;
    @apply border-gray-500;
    @apply max-w-2xl;
    @apply mx-auto;
    @apply h-full;
  }
</style>

<div class="App">
  <div class="AppInner">
    <Row>
      <h1>{appTitle}</h1>
    </Row>
    <Row>
      <p>
        Ever needed to create some placeholder images? Here's an easy was to do
        that.
      </p>
    </Row>
    <Row>
      <h2>~{imgCountStr} Images Generated</h2>
    </Row>

    <ImageForm />
  </div>

</div>
