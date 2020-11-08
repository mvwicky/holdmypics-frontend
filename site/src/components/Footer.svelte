<style>
  .Footer {
    @apply border border-gray-400 bg-gray-100 rounded;
    @apply max-w-3xl h-full;
    @apply mx-auto py-6 px-5;
  }
  .Footer {
    @apply px-16;
    @apply mt-3;
  }
  .FooterInner {
    @apply max-w-xl mx-auto;
  }
  .Footer a[href] {
    @apply text-blue-500 underline;
  }
  .Footer h6 {
    @apply text-sm;
  }
  .Footer .FooterRow {
    @apply flex flex-col items-center;
  }
</style>

<footer class="Footer">
  <div class="FooterInner space-y-3">
    <div class="FooterRow space-y-2">
      <h6 class="block">
        Powered by
        <a
          href="https://palletsprojects.com/p/flask/"
          target="_blank"
          rel="noreferrer noopener">Flask</a>
      </h6>
      <h6 class="block">
        And
        <a
          href="https://www.heroku.com"
          target="_blank"
          rel="noreferrer noopener">Heroku</a>
      </h6>
    </div>
    <div class="FooterRow">
      <h6 class="block">
        This site created with
        <a
          href="https://svelte.dev"
          target="_blank"
          rel="noreferrer noopener">Svelte</a>
        and
        <a
          href="https://snowpack.dev"
          target="_blank"
          rel="noreferrer noopener">Snowpack</a>
      </h6>
    </div>
    <div class="FooterRow text-xs">
      <p>
        Fira Mono, Fira Sans, Overpass, and Spectral are licensed under the
        <a href="/static/licenses/ofl.txt">Open Font License</a>.
      </p>
      <p>
        Roboto is licensed under the
        <a href="/static/licenses/apache.txt">Apache License</a>.
      </p>
    </div>
    <div class="FooterRow">
      <h6>Created by Michael Van Wickle</h6>
    </div>
  </div>
</footer>
