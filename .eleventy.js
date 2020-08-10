module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
  ]);
  eleventyConfig.addPassthroughCopy("site/static");
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: "site",
      includes: "_includes",
      output: "_output",
      data: "_data",
    },
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
