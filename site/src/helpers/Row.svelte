<script lang="ts">
  export let center: boolean = false;
</script>

<style>
  .Row {
    width: 100%;
    display: flex;
    @apply mb-4;
  }
  .Row.center {
    @apply justify-center;
  }
</style>

<div class="Row" class:center>
  <slot />
</div>
