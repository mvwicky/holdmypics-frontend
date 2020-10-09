<script lang="ts">
  export let classes: string = "";

  let actualClasses = ["Row", classes].join(" ");
</script>

<style>
  .Row {
    width: 100%;
    display: flex;
    @apply mb-4;
  }
</style>

<div class={actualClasses}>
  <slot />
</div>
