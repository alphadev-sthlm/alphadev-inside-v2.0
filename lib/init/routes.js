module.exports = function routes(app) {
    app.get("/", (req, res, next) => {
        res.render("home", {
            "cover": {

            },
            "one_of_us": {

            },
            "the_family": {

            },
            "customers": {

            },
            "gallery": {

            },
            "timeline": {

            },
            "travel": {
                
            },
        });
    });
};
