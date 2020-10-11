<script lang="ts">
  export let center: boolean = false;
</script>

<style>
  .Row {
    width: 100%;
    display: flex;
    @apply mb-4;
  }
</style>

<div class="Row" class:justify-center={center}>
  <slot />
</div>
