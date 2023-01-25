module.exports = function(eleventyConfig) {

  /* Localhost server config */
  const fs = require("fs");
  eleventyConfig.setBrowserSyncConfig({
    port: 3000,
    watch: true,
    server: {
      baseDir: "./dist/",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    open: false,
    notify: false,
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('dist/404.html');
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      }
    }
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
