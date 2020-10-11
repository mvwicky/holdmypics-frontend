<script lang="ts">
  import { ALL_FORMATS } from "../helpers/consts";

  const common = "api/<size>/";

  const fmts = ALL_FORMATS.join(",");
  let routes = [
    `${common}<(${fmts}):fmt>/`,
    `${common}<bg>/`,
    `${common}<bg>/<(${fmts}):fmt>/`,
    `${common}<bg>/<fg>/<(${fmts}):fmt>/`,
  ];
</script>

<style>
  .Routes {
    @apply w-full mx-auto pt-3 max-w-xl px-4 bg-white;
    @apply border border-indigo-400 rounded;
    @apply text-gray-900;
  }
  .route-row {
    @apply w-full flex mb-3;
  }
  dd {
    text-indent: 3ch;
  }
  dt + dd {
    @apply mb-2;
  }
</style>

<section class="Routes" id="routes">
  <div class="route-row">
    <h3>Routes</h3>
  </div>
  <div class="route-row">
    <ul class="list-inside">
      {#each routes as route}
        <li class="py-1"><code>{route}</code></li>
      {/each}
    </ul>
  </div>

  <div class="route-row text-sm flex-col">
    <dl>
      <dt><code>&lt;size&gt;</code></dt>
      <dd>
        Either the width and height of a rectangular image (<code>width&times;height</code>)
        or the length of each side of a square image (<code>side</code>), in
        pixels.
      </dd>
      <dt><code>{'<bg>'}</code> and <code>{'<fg>'}</code></dt>
      <dd>Colors specified as 3 or 6 digit hexadecimals.</dd>
      <dt><code>&lt;fmt&gt;</code></dt>
      <dd>
        One of
        {#each ALL_FORMATS as fmt, i}
          <code>{fmt}</code>{i < ALL_FORMATS.length - 1 ? ', ' : '.'}{i === ALL_FORMATS.length - 2 ? 'or ' : ''}
        {/each}
        <!-- <code>jpg,jpeg,gif,png,webp</code>. -->
      </dd>
    </dl>
  </div>
</section>
