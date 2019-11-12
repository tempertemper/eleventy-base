module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    port: 3000,
    open: true,
    server: {
      baseDir: "./dist/",
      serveStaticOptions: {
        extensions: ["html"]
      }
    }
    // serveStaticOptions: {
    //   extensions: ['html']
    // }
  });
  return {
    templateFormats : ["njk", "html", "md", "txt"],
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
