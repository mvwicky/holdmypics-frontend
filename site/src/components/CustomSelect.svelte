<script lang="ts">
  import type { Option } from "../typing";

  export let id: string;
  export let name: string = "";
  export let options: Option[] = [];
  export let value: string = "";
</script>

<style>
  select {
    @apply block w-full;
    @apply shadow-sm;
    @apply border-2 border-gray-200 rounded;
    @apply py-1 px-2;
    @apply appearance-none;
    @apply text-gray-700;
    @apply leading-tight;
  }
  select:focus {
    @apply outline-none bg-white border-indigo-500;
  }

  .SelectArrow {
    @apply pointer-events-none;
    @apply absolute inset-y-0 right-0;
    @apply flex items-center;
    @apply px-2;
    @apply text-gray-700;
  }
  .SelectArrow > svg {
    @apply fill-current h-4 w-4;
  }
</style>

<div class="relative">
  <select name={name || id} {id} bind:value>
    {#each options as opt}
      <option selected={opt.selected} disabled={opt.disabled} value={opt.value}>
        {opt.label}
      </option>
    {/each}
  </select>
  <div class="SelectArrow">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
        4.343 8z" />
    </svg>
  </div>
</div>
