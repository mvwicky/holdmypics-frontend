<script lang="ts">
  import ClipboardJS from "clipboard";

  export let text: string = "Copy to Clipboard";
  export let data: string = "";

  function initClipboard(node: HTMLElement) {
    const clipboard = new ClipboardJS(node);
    console.log(node);
    clipboard.on("success", (e) => {
      console.log(e);
      const origText = text;
      window.setTimeout(() => {
        text = origText;
      }, 1000);
      text = "Copied";
    });
    clipboard.on("error", (e) => {
      console.log(e);
    });
    return {
      destroy() {
        clipboard.destroy();
      },
    };
  }
</script>

<style>
  .CopyButton {
    @apply py-2 px-4;
    @apply text-sm leading-5 font-medium text-white;
    @apply border border-transparent rounded-md bg-blue-800;
  }
  .CopyButton:hover {
    @apply bg-blue-600;
  }
  .CopyButton:focus {
    @apply outline-none border-blue-900;
  }
</style>

<button
  class="CopyButton"
  data-clipboard-text={data}
  use:initClipboard>{text}</button>
