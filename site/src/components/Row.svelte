<script lang="ts">
  export let content: string = "";
</script>

<style>
  .Row {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 1rem;
  }
</style>

<div class="Row">
  <slot>
    {@html content}
  </slot>
</div>
