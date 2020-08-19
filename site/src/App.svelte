<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import Row from "./components/Row.svelte";
  import ImageForm from "./components/ImageForm.svelte";
  import Routes from "./components/Routes.svelte";

  import { fetchCount } from "./helpers/fetch-count";
  import { title, count } from "./helpers/stores";

  onMount(() => {
    fetchCount().then((c) => {
      if (c !== null) {
        count.set(c);
      }
    });
  });

  let imgCountStr: string = "";
  const unsubscribe = count.subscribe((val) => {
    if (val !== undefined) {
      imgCountStr = val.toLocaleString(undefined, {
        style: "decimal",
        maximumFractionDigits: 0,
      });
    } else {
      imgCountStr = "";
    }
  });
  onDestroy(unsubscribe);
</script>

<style>
  .App {
    @apply w-full min-h-screen;
  }
  .AppInner {
    @apply border-l border-r border-gray-500;
    @apply max-w-2xl h-full;
    @apply mx-auto py-6;
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
      <h2>
        {#if imgCountStr.length === 0}
          &hellip;
        {:else}~{imgCountStr} Images Generated{/if}
      </h2>
    </Row>
    <ImageForm />
    <Routes />
  </div>
</div>
