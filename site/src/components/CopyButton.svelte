<script lang="ts">
  import ClipboardJS from "clipboard";

  export let text: string = "Copy to Clipboard";
  export let data: string = "";

  let justCopied: boolean = false;
  const duration = 1250;

  function initClipboard(node: HTMLElement) {
    const clipboard = new ClipboardJS(node);
    node.style.animationDuration = `${duration}ms`;
    clipboard.on("success", (e) => {
      justCopied = true;
      window.setTimeout(() => {
        justCopied = false;
      }, duration);
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
  @keyframes copied-pulse {
    from {
      transform: scale3d(1, 1, 1);
    }
    /* 50% {
      transform: scale3d(1.05, 1.05, 1.05);
    } */
    to {
      transform: scale3d(1.05, 1.05, 1.05);
    }
  }

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
  .CopyButton.copied {
    animation: copied-pulse 1s ease-in-out 1;
  }
</style>

<button
  class="CopyButton"
  data-clipboard-text={data}
  use:initClipboard
  title="Click to copy the current URL"
  class:copied={justCopied}
  disabled={justCopied}>
  {#if justCopied}Copied{:else}{text}{/if}
</button>
