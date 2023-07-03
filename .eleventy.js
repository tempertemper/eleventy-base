module.exports = function(eleventyConfig) {

  // Generate assets
  eleventyConfig.addPassthroughCopy({ "src/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/css": "assets/css" });

  // Localhost server config
  eleventyConfig.setServerOptions({
    port: 3000,
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };
};
