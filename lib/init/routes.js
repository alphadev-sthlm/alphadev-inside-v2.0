const shuffle = require("./shuffle");
const timeline = require("../../content/timeline");
const uspar = require("../../content/uspar");
const family = require("../../content/family");
const quotes = require("../../content/quotes");

module.exports = function routes(app) {
  app.get("/", (req, res, next) => {
    let number = Math.floor(Math.random()  * quotes.all.length);
    let quote = quotes.all[number];
    console.log(number);
    console.log(quote.text);
    console.log(quote.author);
    res.render("home", {
        "cover": {
          "phonetic": "[ɪnˈsaɪd ˈælfədɛv]",
          "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        "one_of_us": {
          "title": "BORTA BRA MEN JOBBET BÄST",
          "body": "Welcome inside Alphadev! Den här sidan riktar sig till dig som är lite nyfiken på hur det är att jobba på Alphadev. Du har kanske stött på någon Alphadevare i något projekt, kanske hört det pratas om oss i kafferummet, eller bara random googlat dig hit(yeah, right). Börja med att kika på alphadev.se om du inte redan gjort det, så ser du lite om vad vi pysslar med, och fortsätt sen här om du är lite nyfiken på hur det ser ut på insidan...!",
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
            "/gallery/grupp.png",
            "/gallery/helena.png",
            "/gallery/sammihamner.png",
            "/gallery/jens.png",
            "/gallery/sammi.png",
            "/gallery/eddo.png",
            "/gallery/leon.png",
            "/gallery/lundgrenfredrik.png"
          ]
        },
        "travel": {
          "title": "WE LOVE TO TRAVEL"
        },
        "join_us": {
          "title": "VILL DU PÅBÖRJA EN NY RESA?",
          "text": "Är du en kaffedrickare och utvecklare som tycker att vi verkar vara ett schysst och prestigelöst gäng. Vi söker ständigt nya duktiga och sköna kollegor. Boka in en kaffe med @Jon så börjar vi där.",
          "mail": "hello@alphadev.se",
          "link": "BOKA EN KAFFE"
        },
        "uspar": uspar,
        "footer": {
          "tel": "070-296 00 05",
          "mail": "KONTAKT@ALPHADEV.SE",
          "adress": "KUNGSGATAN 6, 111 43 STOCKHOLM"
        }
      });
    });
};
