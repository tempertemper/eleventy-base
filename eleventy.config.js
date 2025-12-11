export default function(config) {

  // Generate assets
  config.addPassthroughCopy({ "src/img": "assets/img" })
  config.addPassthroughCopy({ "src/css": "assets/css" })

  // Localhost server config
  config.setServerOptions({
    port: 3000
  })

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  }
}
