<script lang="ts">
  import { onDestroy } from "svelte";

  onDestroy(() => {
    console.log("Getting Destroyed");
  });
</script>

<style>
  .Loading {
    @apply w-full flex justify-center;

    min-height: 1rem;
    min-width: 1rem;
  }
  .Loading span {
    width: 1rem;
    height: 1rem;
  }
</style>

<div class="Loading">
  <span class="animate-ping rounded-full bg-pink-400 opacity-75">&nbsp;</span>
</div>
