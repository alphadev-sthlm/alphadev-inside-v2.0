

const express = require("express");
const path = require("path");
const errorHandler = require("./errorHandler");
const middleware = require("./middleware");
const routes = require("./routes");
const exphbs = require("express-handlebars");
const sslRedirect = require('heroku-ssl-redirect');
const compression = require("compression");

function setupApp() {
  const app = express();
  app.use(compression());
  app.use(express.static(path.join(__dirname, "..", "..", "public")));
  app.use(express.static(path.join(__dirname, "..", "..", "assets", "images")));
  app.use(express.static(path.join(__dirname, "..", "..", "assets", "fonts")));

  app.use(sslRedirect());

  app.engine('.hbs', exphbs({ extname: ".hbs", defaultLayout: "main", partialsDir:"views/partials/" }));
  app.set('view engine', '.hbs');

  process.env.TZ = "Europe/Stockholm";

  middleware(app);
  routes(app);
  app.use(errorHandler);

  return app;
}

module.exports = setupApp;
