const chokidar = require("chokidar");
const fs = require("fs");
const stylus = require("stylus");
const path = require("path");
const logger = require("../lib/logger");

// Define input filename and output filename
const styleInput = path.join(__dirname, "..", "assets", "styles", "main.styl");
const styleOutputFilename = "main.css";
const styleOutput = path.join(__dirname, "..", "public", styleOutputFilename);
const components = path.join(__dirname, "..", "assets", "styles", "components");
const base = path.join(__dirname, "..", "assets", "styles", "base")
const stylusPaths = [components, base];

// Build stylesheet on first execute
buildStyles(styleInput, styleOutput, stylusPaths)

if (process.argv.indexOf("-w") > -1) {
  const index = process.argv.indexOf("-w") + 1;
  const watchPath = process.argv[index];
  logger.info("Watching stylesheet changes");

  chokidar.watch(watchPath).on('change', () => {
    buildStyles(styleInput, styleOutput, stylusPaths)
  })
}

function buildStyles(input, output, paths) {
  stylus(fs.readFileSync(input, 'utf-8'))
    .set('paths', paths)
    .set('include css', true)
    .set('watch', true)
    .render(function(err, css) {
      if (err) throw err;

      fs.writeFile(output, css, (err) => {
        if (err) throw err;

        console.log("Wrote stylesheet to ", styleOutput);
      });
  });
}