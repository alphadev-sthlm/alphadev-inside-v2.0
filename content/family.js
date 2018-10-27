const fs = require('fs');
const path = require("path");

let peepPath = path.join(__dirname) + '/peeps/';
let definedPeeps = fs.readdirSync(peepPath).map(f => require(peepPath + f));

const loremDetails = {
  "questions": [
    {
      "q": "Ja eller nej?",
      "a": "Båda"
    },
    {
      "q": "Glass eller tårta?",
      "a": "Diabetes"
    },
    {
      "q": "Mat eller svält?",
      "a": "Huel är lite av båda."
    },
    {
      "q": "Kommer du hit ofta och smular med dina kex?",
      "a": "Jag äter knäckebröd i sängen."
    }
  ],
  "body": [
    "Lorem ipsum dolor amet master cleanse truffaut taiyaki, hammock irony mustache flexitarian raclette seitan twee. Vexillologist man bun kogi shaman. Truffaut pitchfork offal art party, subway tile tumeric hella ramps biodiesel portland disrupt chia migas. Man bun tousled affogato XOXO. Mixtape before they sold out biodiesel truffaut kogi kombucha kinfolk gentrify. Street art 90's gluten-free umami kickstarter, snackwave hexagon fam. Bespoke iPhone whatever vice everyday carry.",
    "Messenger bag banjo pinterest tilde before they sold out four loko seitan taiyaki deep v intelligentsia scenester fashion axe knausgaard crucifix biodiesel. Banh mi pour-over cronut normcore farm-to-table four dollar toast shaman lomo gentrify master cleanse direct trade actually distillery. Venmo literally swag vice affogato, try-hard keffiyeh etsy. Subway tile cornhole mixtape chia. Keffiyeh dreamcatcher palo santo vinyl raw denim asymmetrical. Artisan XOXO chicharrones YOLO fam 3 wolf moon plaid meh polaroid."
  ]
};

const members = [
  {
    "name": "Sammi Haj Hassine",
    "title": "Utvecklare",
    "image": "peeps2/Sammi_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Olle Kallström",
    "title": "Utvecklare",
    "image": "peeps2/Olle_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Jon Neergaard",
    "title": "VD",
    "image": "peeps2/Jon_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Jens Ohlsson",
    "title": "Utvecklare",
    "image": "peeps2/Jens_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Jonas Montonen",
    "title": "Utvecklare",
    "image": "peeps2/Jonas_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Peter Österdahl",
    "title": "Utvecklare",
    "image": "peeps2/Peter_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Daniel Lundström",
    "title": "Utvecklare",
    "image": "peeps2/Lundström_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Daniel Hamner",
    "title": "Utvecklare",
    "image": "peeps2/Hamner_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Fredrik Bergström",
    "title": "Utvecklare",
    "image": "peeps2/Fredrik_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Johan Windahl",
    "title": "Business manager",
    "image": "peeps2/Windahl_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Johan Lindgren",
    "title": "Utvecklare",
    "image": "peeps2/Lindgren_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Tommy Lindberg",
    "title": "Utvecklare",
    "image": "peeps2/Tommy_prt_pale.jpg",
    "details": loremDetails
  },
  {
    "name": "Erik Scherman",
    "title": "Utvecklare",
    "image": "peeps2/Erik_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Helena Tehler",
    "title": "Projektledare",
    "image": "peeps2/Helena_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Anders Ulfheden",
    "title": "Utvecklare",
    "image": "peeps2/Ulfheden_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Robert Wideberg",
    "title": "Utvecklare",
    "image": "peeps2/Robert_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Johan Andersson",
    "title": "Utvecklare",
    "image": "peeps2/Andersson_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Markus Rantanikunen",
    "title": "Utvecklare",
    "image": "peeps2/Markus_prt_pale_sml.jpg",
    "details": loremDetails
  },
  {
    "name": "Marcus Höjvall",
    "title": "Utvecklare",
    "image": "peeps2/Höjvall_prt_pale_sml.jpg",
    "details": loremDetails
  }
];
module.exports = {
  "title": "Hälsa på oss i familjen",
  "members": definedPeeps.concat(members)
};