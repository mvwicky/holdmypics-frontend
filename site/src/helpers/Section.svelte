<style>
  .Section {
    @apply border border-gray-400 bg-gray-100 rounded;
    @apply max-w-3xl h-full;
    @apply mx-auto py-6 px-16;
  }
  .SectionInner {
    @apply max-w-xl mx-auto;
  }
</style>

<div class="Section">
  <div class="SectionInner">
    <slot />
  </div>
</div>
