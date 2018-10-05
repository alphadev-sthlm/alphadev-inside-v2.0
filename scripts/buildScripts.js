const chokidar = require("chokidar");
const path = require("path");
const logger = require("../lib/logger");
const babel = require("rollup-plugin-babel");
const { rollup } = require("rollup");

// Define input filename and output filename
const scriptInput = path.join(__dirname, "..", "assets", "js", "index.js");
const scriptOutputFilename = "main.js";
const scriptOutput = path.join(__dirname, "..", "public", scriptOutputFilename);


const rollupConfig = {
  input: scriptInput,
  plugins: [babel()]
};

// Build scripts on first execute
buildScripts();

if (process.argv.indexOf("-w") > -1) {
  const index = process.argv.indexOf("-w") + 1;
  const watchPath = process.argv[index];
  logger.info("Watching scripts changes");

  chokidar.watch(watchPath).on('change', () => {
    buildScripts();
  })
}

async function buildScripts() {
  try {
    const bundle = await rollup(rollupConfig);

    await bundle.write({
      file: scriptOutput,
      format: "iife"
    });

    console.log("Wrote script to ",  scriptOutput);
  } catch (err) {
    logger.error(err);
  }
}