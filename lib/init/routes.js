const shuffle = require("./shuffle");
const timeline = require("../../content/timeline");
const uspar = require("../../content/uspar");
const family = require("../../content/family");
const quotes = require("../../content/quotes");
const salesResponsible = require("../../content/salesResponsible");
const backToInside = require("../../content/backToInside");
const footer = require("../../content/footer");
const jobOpportunity = require("../../content/jobOpportunity");

module.exports = function routes(app) {
  app.get("/", (req, res, next) => {
    let number = Math.floor(Math.random() * quotes.all.length);
    let quote = quotes.all[number];
    res.render("home", {
      "cover": {
        "phonetic": "[ɪnˈsaɪd ˈælfədɛv]"
      },
      "one_of_us": {
        "title": "BORTA BRA MEN JOBBET BÄST",
        "headline": "Welcome inside Alphadev!",
        "first_section": "Den här sidan riktar sig till dig som är lite nyfiken på hur det är att jobba på Alphadev. Du har kanske stött på någon Alphadevare i något projekt, kanske hört det pratas om oss i kafferummet, eller bara random googlat dig hit (yeah, right).",
        "second_section": "Börja med att kika på",
        "alphadev.se": "alphadev.se",
        "third_section": "om du inte redan gjort det, så ser du lite om vad vi pysslar med, och fortsätt sen här om du är lite nyfiken på hur det ser ut på insidan...!",
        "button": "BLI EN AV OSS",
      },
      "the_family": {
        ...family,
        members: shuffle(family.members)
      },
      "customers": {
        "title": "Våra kunder",
        "text": "Vi hjälper våra kunder på plats i deras projekt i Stockholm. Kunderna återfinns inom alla möjliga branscher; retail, media, spel, finans, m.fl,; små som stora bolag, kända och okända varumärken. Här ser du ett urval av bolag som våra konsulter hjälpt:"
      },
      "timeline": timeline,
      "gallery": {
        "quote": quote.text,
        "author": quote.author,
        "images": [
          "/gallery/grupp-min.png",
          "/gallery/helena-min.png",
          "/gallery/sammihamner-min.png",
          "/gallery/julbord-min.jpg",
          "/gallery/markus-min.jpg",
          "/gallery/eddo-min.png",
          "/gallery/andrea-min.png",
          "/gallery/lundgrenfredrik-min.png"
        ]
      },
      "travel": {
        "title": "WE LOVE TO TRAVEL"
      },
      "join_us": {
        "title": "VILL DU PÅBÖRJA EN NY RESA?",
        "text": "Är du själv systemutvecklare och gillar det du sett hittills? Kanske är det just dig vi letar efter. Boka in en kaffe med vår VD och concierge, Jon, så börjar vi där!",
        "mail": "hello@alphadev.se",
        "link": "BOKA EN KAFFE"
      },
      uspar,
      jobOpportunity,
      footer
    });
  });
};
