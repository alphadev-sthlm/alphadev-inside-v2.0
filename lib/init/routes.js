module.exports = function routes(app) {
  app.get("/", (req, res, next) => {
    res.render("home", {
      "title": "Alphadev Inside",
      "body": "Hello World"
    });
  });
};
