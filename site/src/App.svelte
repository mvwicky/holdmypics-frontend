<script lang="ts">
  import { onDestroy } from "svelte";

  import Row from "./components/Row.svelte";
  import ImageForm from "./components/ImageForm.svelte";
  import { title, count } from "./helpers/stores";

  let imgCountStr: string = "0";
  const unsubscribe = count.subscribe((val) => {
    console.log(val);
    imgCountStr = val.toLocaleString(undefined, {
      style: "decimal",
      maximumFractionDigits: 0,
    });
  });
  onDestroy(unsubscribe);
</script>

<style>
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
    @apply py-6;
  }
</style>

<div class="App">
  <div class="AppInner">
    <Row>
      <h1>{$title}</h1>
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
