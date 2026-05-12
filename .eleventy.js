module.exports = function(eleventyConfig) {
  // Passthrough copy for assets (images, CSS, JS, PDFs)
  eleventyConfig.addPassthroughCopy("src/assets");
  // Passthrough copy for favicon
  eleventyConfig.addPassthroughCopy("src/favicon.svg");

  // Bind Browsersync to all interfaces for Docker
  eleventyConfig.setBrowserSyncConfig({
    host: "0.0.0.0"
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};
