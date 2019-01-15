
const logger = require("./lib/logger.js");
const setupApp = require("./lib/init/setupApp.js");
const app = setupApp();

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    logger.info("listening on port %d", port);
  });
}

if (process.env.NODE_ENV === "test") {
  console.log('test');
  module.exports = app;
}
