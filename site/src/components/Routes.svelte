<script lang="ts">
  let routes = [
    "api/<size>/<(jpg,jpeg,gif,png,webp):fmt>/",
    "api/<size>/<bg_color>/",
    "api/<size>/<bg_color>/<(jpg,jpeg,gif,png,webp):fmt>/",
    "api/<size>/<bg_color>/<fg_color>/<(jpg,jpeg,gif,png,webp):fmt>/",
  ];
</script>

<style>
  .Routes {
    @apply w-full mx-auto pt-2;
  }
  .route-row {
    @apply px-10 w-full flex mb-4;
  }
</style>

<section class="Routes" id="routes">
  <div class="route-row">
    <h3>Routes</h3>
  </div>
  {#each routes as route}
    <div class="route-row"><code>{route}</code></div>
  {/each}
</section>
