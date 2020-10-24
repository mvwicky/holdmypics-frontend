<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import ImageForm from "./components/ImageForm.svelte";
  import Routes from "./components/Routes.svelte";
  import Row from "./helpers/Row.svelte";
  import Styles from "./helpers/Styles.svelte";
  import Loading from "./components/Loading.svelte";
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
  onDestroy(() => {
    console.log("Unsubscribing");
    unsubscribe();
  });
</script>

<style>
  .App {
    @apply w-full min-h-screen py-10;
  }
  .AppInner,
  .Footer,
  .Header {
    @apply border border-gray-400 bg-gray-100 rounded;
    @apply max-w-3xl h-full;
    @apply mx-auto py-6 px-5;
  }
  .Footer,
  .Header {
    @apply px-16;
  }
  .Header {
    @apply mb-3 pb-2;
  }
  .Footer {
    @apply mt-3;
  }
  .FooterInner,
  .HeaderInner {
    @apply max-w-xl mx-auto;
  }
  .Footer a[href] {
    @apply text-blue-500 underline;
  }
  .Footer h6 {
    @apply text-sm;
  }
  .Footer .FooterRow {
    @apply flex flex-col items-center;
  }
</style>

<Styles />

<div class="App">
  <header class="Header">
    <div class="HeaderInner">
      <Row center={true}>
        <h1>{$title}</h1>
      </Row>
      <Row center={true}>
        <p>
          Ever needed to create some placeholder images? Here's an easy was to
          do that.
        </p>
      </Row>
      <Row center={true}>
        <h2>
          {#if imgCountStr.length === 0}
            <Loading />
          {:else}
            ~
            <span data-cy="img-count">{imgCountStr}</span>
            Images Generated
          {/if}
        </h2>
      </Row>
    </div>
  </header>
  <div class="AppInner">
    <ImageForm props={imageFormProps} />

    <Routes />
  </div>
  <footer class="Footer">
    <div class="FooterInner space-y-3">
      <div class="FooterRow space-y-2">
        <h6 class="block">
          Powered by
          <a
            href="https://palletsprojects.com/p/flask/"
            target="_blank"
            rel="noreferrer noopener">Flask</a>
        </h6>
        <h6 class="block">
          And
          <a
            href="https://www.heroku.com"
            target="_blank"
            rel="noreferrer noopener">Heroku</a>
        </h6>
      </div>
      <div class="FooterRow">
        <h6 class="block">
          This site created with
          <a
            href="https://svelte.dev"
            target="_blank"
            rel="noreferrer noopener">Svelte</a>
        </h6>
      </div>
      <div class="FooterRow text-xs">
        <p>
          Fira Mono, Fira Sans, Overpass, and Spectral are licensed under the
          <a href="/static/licenses/ofl.txt">Open Font License</a>.
        </p>
        <p>
          Roboto is licensed under the
          <a href="/static/licenses/apache.txt">Apache License</a>.
        </p>
      </div>
      <div class="FooterRow">
        <h6>Created by Michael Van Wickle</h6>
      </div>
    </div>
  </footer>
</div>
