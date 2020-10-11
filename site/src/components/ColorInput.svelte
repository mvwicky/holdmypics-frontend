<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  import { COLOR_PROPS } from "../helpers/consts";

  export let label: string;
  export let id: string;
  export let name: string | undefined = undefined;
  export let value: string;

  let input: HTMLInputElement;

  const dispatch = createEventDispatcher();

  onMount(() => {
    name = name ?? id;
  });

  function updateValue() {
    if (input.validity.valid) {
      dispatch("update", { value: input.value });
    }
  }
</script>

<style>
  * {
    @apply block;
    flex: 0 0 50%;
  }
  input {
    @apply w-full;
    @apply shadow-sm;
    @apply border-2 border-gray-200 rounded;
    @apply py-1 px-2;
    @apply text-gray-700;
    @apply leading-tight;
  }
</style>

<label for={id}>{label}</label>
<input
  {id}
  {name}
  {value}
  bind:this={input}
  on:input={updateValue}
  {...COLOR_PROPS} />
