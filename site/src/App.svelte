<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import ImageForm from "./components/ImageForm.svelte";
  import Routes from "./components/Routes.svelte";
  import Row from "./components/Row.svelte";
  import { fetchCount } from "./helpers/fetch-count";
  import { title, count } from "./helpers/stores";
  import type { ImageFormProps } from "./typing/index";

  export let imageFormProps: ImageFormProps;

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
        {:else}
          ~
          <span data-cy="img-count">{imgCountStr}</span>
          Images Generated
        {/if}
      </h2>
    </Row>
    <ImageForm {...imageFormProps} />
    <Routes />
  </div>
</div>
