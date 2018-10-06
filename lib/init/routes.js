module.exports = function routes(app) {
    app.get("/", (req, res, next) => {
        res.render("home", {
            "cover": {
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            "one_of_us": {
              "title": "BORTA BRA MEN JOBBET BÄST",
              "body": "Vi är ett konsultbolag med erfarna specialister inom systemutveckling, inriktade på arkitektur och agil utveckling på moderna plattformar inom hela stacken. Vi jobbar främst på plats hos våra kunder i Stockholmsområdet – stora internationella bolag, såväl som små startup - bolag i alla tänkbara branscher.Bolag som vill digitalisera eller vidareutveckla sina befintliga processer och bolag som skapar helt nya affärer på en digital plattform - låt oss hjälpa dig på din resa!"
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
