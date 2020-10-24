<script lang="ts">
  import ClipboardJS from "clipboard";

  export let text: string = "Copy to Clipboard";
  export let data: string = "";

  let justCopied: boolean = false;
  const duration = 1250;

  function initClipboard(node: HTMLElement) {
    const clipboard = new ClipboardJS(node);
    node.style.animationDuration = `${duration}ms`;
    clipboard.on("success", () => {
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
  @keyframes copied {
    from {
      background-position: bottom left;
      transform: scale3d(1, 1, 1);
    }
    /* 50% {
      transform: scale3d(1.05, 1.05, 1.05);
    } */
    to {
      background-position: bottom right;
      transform: scale3d(1.05, 1.05, 1.05);
    }
  }

  .CopyButton {
    --gradient-from-color: rgba(44, 82, 130, 0.9);
    --gradient-to-color: rgba(0, 100, 255, 0.3);
    --gradient-color-stops: var(--gradient-from-color) 50%,
      var(--gradient-to-color) 50%;
    @apply py-2 px-4;
    @apply text-sm leading-5 font-medium text-white;
    @apply border border-transparent rounded-md;
    @apply bg-clip-padding bg-gradient-to-r bg-no-repeat bg-left-bottom;

    background-size: 200% 100%;
  }
  .CopyButton:hover {
    @apply bg-blue-600;
  }
  .CopyButton:focus {
    @apply outline-none border-blue-900;
  }
  .CopyButton.copied {
    @apply px-8;
    animation: copied 1s ease-in-out 1 normal backwards;
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
