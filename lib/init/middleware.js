

const config = require("../../config/development");
const fs = require("fs");
const morgan = require("morgan");

function setupAccessLog(app) {
  const logFormat = ":remote-addr - :remote-user [:date[iso]] \":method :url HTTP/:http-version\" :status :res[content-length] :response-time ms";
  const options = {};
  if (config.requestLogging !== "stdout") {
    const accessLogStream = fs.createWriteStream(config.requestLogging, {flags: "a"});
    options.stream = accessLogStream;
  }
  app.use(morgan(logFormat, options));
}

function middleware(app) {
  if (config.requestLogging) {
    setupAccessLog(app);
  }

  app.disable("x-powered-by");
}

module.exports = middleware;
