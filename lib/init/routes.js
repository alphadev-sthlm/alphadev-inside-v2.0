var shuffle = require("./shuffle");

module.exports = function routes(app) {
  app.get("/", (req, res, next) => {
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

    const members = shuffle([
      {
        "name": "Leon Hennings",
        "title": "Utvecklare",
        "image": "peeps/leon_sml.png",
        "details": {
          "questions": [
            {
              "q": "När smakar en Tuborg bäst?",
              "a": "Hvergang!"
            },
            {
              "q": "Finns fri vilja?",
              "a": "Troligtvis inte, men det spelar ingen roll."
            },
            {
              "q": "Alien eller Aliens?",
              "a": "Ettan såklart"
            },
            {
              "q": "Vad är ditt sbästa  partytrick?",
              "a": "Att prata för högt om saker som gör folk obekväma tills någon säger ifrån, och sen fortsätta lite till."
            }
          ],
          "body": [
            "Jag är utvecklare och jobbar vanligtvis med Java och JavaScript. Jag är spritt språngandes galen och gillar att ligga i bakhåll på folk i parker.",
            "När folk inte gör som jag säger börjar jag oftast gråta. Kan inte ta kritik men är duktig på att ge den, helt utan att någon bett om det."
          ]
        }
      },
      {
        "name": "Sammi Haj Hassine",
        "title": "Utvecklare",
        "image": "peeps/sammi_sml.png",
        "details": loremDetails
      },
      {
        "name": "Olle Kallström",
        "title": "Utvecklare",
        "image": "peeps/olle_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Jon Neergaard",
        "title": "VD",
        "image": "peeps/jon_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Jens Ohlsson",
        "title": "Utvecklare",
        "image": "peeps/jens_sml.png",
        "details": loremDetails
      },
      {
        "name": "Jonas Montonen",
        "title": "Utvecklare",
        "image": "peeps/jonas_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Peter Österdahl",
        "title": "Utvecklare",
        "image": "peeps/peter_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Daniel Lundström",
        "title": "Utvecklare",
        "image": "peeps/daniel_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Daniel Hamner",
        "title": "Utvecklare",
        "image": "peeps/hamner_sml.png",
        "details": loremDetails
      },
      {
        "name": "Fredrik Bergström",
        "title": "Utvecklare",
        "image": "peeps/fredrik_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Eduardo Castaneda",
        "title": "Utvecklare",
        "image": "peeps/eddo_sml.png",
        "details": loremDetails
      },
      {
        "name": "Johan Windahl",
        "title": "Business manager",
        "image": "peeps/johan_w_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Johan Lindgren",
        "title": "Utvecklare",
        "image": "peeps/johan_l_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Tommy Lindberg",
        "title": "Utvecklare",
        "image": "peeps/tommy_sml.jpg",
        "details": loremDetails
      },
      {
        "name": "Erik Scherman",
        "title": "Utvecklare",
        "image": "peeps/scherman_sml.png",
        "details": loremDetails
      },
      {
        "name": "Helena Tehler",
        "title": "Projektledare",
        "image": "peeps/helena_sml.png",
        "details": loremDetails
      },
      {
        "name": "Anders Ulfheden",
        "title": "Utvecklare",
        "image": "peeps/anders_sml.png",
        "details": loremDetails
      },
      {
        "name": "Johan Forsman",
        "title": "Utvecklare",
        "image": "peeps/Forsman4_sml_bw.png",
        "details": {
          "questions": [
            {
              "q": "Star Wars eller Star Trek?",
              "a": "Star Wars!"
            },
            {
              "q": "Tabs eller spaces?",
              "a": "Kodar uglifierat direkt!"
            },
            {
              "q": "Alien 1 eller 2??",
              "a": "Får man välja Predator?"
            },
            {
              "q": "Var peakade Hasselhof?",
              "a": "Jag är övertygad om att han inte har peakat än."
            }
          ],
          "body": [
            "Jag är utvecklare och jobbar vanligtvis med Java och JavaScript. Jag är spritt språngandes galen och gillar att ligga i bakhåll på folk i parker.",
            "När folk inte gör som jag säger börjar jag oftast gråta. Kan inte ta kritik men är duktig på att ge den, helt utan att någon bett om det."
          ]
        }
      },
      {
        "name": "Robert Wideberg",
        "title": "Utvecklare",
        "image": "peeps/robert_sml_bw.png",
        "details": loremDetails
      },
      {
        "name": "Johan Andersson",
        "title": "Utvecklare",
        "image": "peeps/johan_andersson_sml_bw.png",
        "details": loremDetails
      },
      {
        "name": "Markus Rantanikunen",
        "title": "Utvecklare",
        "image": "peeps/markus_sml_bw.png",
        "details": loremDetails
      },
      {
        "name": "Marcus Höjvall",
        "title": "Utvecklare",
        "image": "peeps/marcus_sml_bw.png",
        "details": loremDetails
      }
    ]);
    res.render("home", {
      "cover": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      "one_of_us": {
        "title": "BORTA BRA MEN JOBBET BÄST",
        "body": "Welcome inside Alphadev! Den här sidan riktar sig till dig som är lite nyfiken på hur det är att jobba på Alphadev. Du har kanske stött på någon Alphadevare i något projekt, kanske hört det pratas om oss i kafferummet, eller bara random googlat dig hit(yeah, right). Börja med att kika på alphadev.se om du inte redan gjort det, så ser du lite om vad vi pysslar med, och fortsätt sen här om du är lite nyfiken på hur det ser ut på insidan...!",
        "button": "BLI EN AV OSS",
      },
      "the_family": {
        "title": "Hälsa på oss i familjen",
        "members": members
      },
      "customers": {
        "title": "Våra kunder",
        "text": "Vi hjälper våra kunder på plats i deras projekt i Stockholm, men har en stark sammanhållning med många gemensamma träffar för kompetensutveckling och av ren social karaktär. Vårt egna kontor ligger centralt och vi försöker ses så ofta vi kan. Kunderna återfinns inom alla möjliga branscher; retail, media, spel, finans, m.fl,; små som stora bolag, kända och okända varumärken. Här ser du ett urval av bolag som våra konsulter hjälpt:"
      },
      "timeline": {
        "title": "Timeline",
        "items": [
          {
            "title": "2015 Alphadev ser dagens ljus",
            "text": "Startat av ett gäng erfarna systemutvecklare som spenderat större delen av sina liv i konsultbranschen, med målet att bygga det bolag de själva alltid velat jobba på – av utvecklare för utvecklare. WCGW? Inte så mycket än, ska det visa sig.",
          },
          {
            "title": "2015 Riding the waves",
            "text": "Våra teambyggande konferenser tar oss två gånger om året till olika platser i långhelgs-räckvidd. Jens såg en surfdokumentär på TV och deklarerade att höst-konferensen ska lära oss att bemästra vågorna i Biarritz; said and done. Vi är nu tio glada Alphadevare ombord.",
          },
          {
            "title": "2016 Hem ljufva hem",
            "text": "Vi lämnar kontorshotellvärlden, och flyttar in i vårt första egna kontor på Vasagatan, äntligen med bra plats för dragningar, workshops, AW’ande och spelkvällar. Vår nuvarande logga ser dagens ljus och vi börjar försiktigt testa vår idé om Alphadev-dagen; ett regelbundet återkommande tillfälle då vi alla träffas för att diskutera angelägna frågor om Alphadev och möjligheten att titta strategiskt framåt och bolla idéer.",
          },
          {
            "title": "2016 Ständigt lärande",
            "text": "Förutom några veckors uppdragsletande precis vid uppstarten av bolaget har vi sedan dess rullat på utan någon obelagd tid alls på våra konsulter; en het marknad kombinerat med riktiga duktiga utvecklare är förstås en underlättande kombination, och våra nöjda kunder ber ständigt om mer hjälp. Bra fart i kompetensträffarna som bl.a. handlat om React, Redux, React-native, Kotlin, Typescript, Testning i Angular, Microservices vs Monoliter, Spring Boot, Cassandra-klustring, Ansible & Vagrant, mm.",
          },
          {
            "title": "2017 Continuous integration",
            "text": "Tillväxten fortsätter och integrationen av våra nya Alphadevare likaså; det är vinter och ett fjäll måste besökas för fokuserat teambyggande. Mayrhofen välkomnar oss, och vi återvänder hem nästan lika hela som innan och fyllda av Schnitzlar, Haxxensaxxen(?) och Johnny Däpp. Årets julfest på Mr French avrundar året som bjudit på många nya härliga Alphadevare och nya spännande kunder.",
          },
          {
            "title": "2017 The bureaucracy is expanding to meet the needs of the expanding bureaucracy",
            "text": "Med nu 18 Alphadevare ombord var det dags att förstärka lite på huvudkontoret. Vi är försiktiga med overhead i bolaget; vi ger hellre tillbaka så mycket som möjligt till våra konsulter, än att ha onödig byråkrati. Windahl stärker upp HQ på deltid och rustar oss således väl för framtiden. Jakten på ett nytt, större, kontor drar igång, vår nya externwebb ser dagens ljus och vi kultur-chockar oss med en långhelg i vackra Transylvanien. Multumesc!",
          },
          {
            "title": "2018 Kungsgatan 6",
            "text": "Efter ett litet besök i franska Pyrenéerna med nu ganska stora familjen, så flyttar vi in i ett nytt stort och fint kontor på Kungsgatan 6: 22 Alphadevare, redo att ta över världen. There is no fate but what we make…! (Fredrik försöker fortfarande bygga Skynet utifrån ett Raspberry Pi-kluster i sin källare. Någon borde stoppa honom, men o andra sidan ska man inte peta på björnar som sover).",
          },
        ],
      },
      "gallery": {
        "text": "They Don't Think It Be Like It Is But It Do",
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
      "travel": {},
      "why": {
        "usps": [
          {
            "title": "Frihet",
            "text": "Det kanske mest sammanfattande ordet för Alphadev, som genomsyrar allt vi gör och hur vi är organiserade."
          },
          {
            "title": "Kaizen",
            "text": "Vi tror inte att vi är bäst på allt - men vi har ambitionen. Och vi har insikten att vi ständigt måste utvärdera oss själva, våga prova, våga revidera, våga förändra oss. Alla bidrar med idéer och feedback kring hur vi jobbar, och hjälper oss att styra oss själva till att bli det bästa konsultbolaget för en vass och driven utvecklare i Stockholm."
          },
          {
            "title": "Mer kaka",
            "text": "Vi har slimmat organisationen och ger istället så mycket vi kan tillbaka till dig som konsult. Alla har samma lönemodell; vi kör helt rörliga löner och som konsult behåller du 80% själv."
          },
          {
            "title": "Transparens",
            "text": "Varför kan vi driva ett riktigt bra konsultbolag med massor av roliga events, kompetensdelning, schysst kontor och samtidigt ge grymma löner? För att vi är effektiva med vart pengarna tar vägen. Och vi skäms inte för att visa vart alla pengar kommer ifrån och tar vägen för våra anställda, vilket gör på regelbunden basis. Vi tål att jämföras."
          },
          {
            "title": "Samhörighet",
            "text": "Alphadev fungerar för att alla är delaktiga och hjälps åt. Men när vi jobbar åt våra kunder sitter vi ofta fysiskt åtskilda. För att skapa samhörighet när man spenderar stor del av tiden åtskilda krävs ett aktivt arbete, med många möjligheter att ses för att lära känna varandra. Och vi satsar stort på detta."
          },
          {
            "title": "Inga chefer",
            "text": "Någon traditionell chef behövs inte på Alphadev; nästan alla beslut som du tidigare frågat din chef om, fattar du nu själv. Däremot får du hjälp att fatta bra beslut, och - om du vill - får du en egen personlig utvecklingscoach. Och givetvis all form av markservice, säljhjälp, etc, som man behöver för att göra ett bra jobb."
          },
          {
            "title": "Jämlikhet",
            "text": "Alla har samma lönemodell - inga jobbiga löneförhandlingar; det spelar ingen roll om du kom in sist eller grundade bolaget. Inga konsulttrappor, stegar, etc. Alla har samma förutsättningar fråndag 1.",
          },
          {
            "title": "Good times",
            "text": "...och eftersom man ändå ska jobba större delen av livet, så kan man väl försöka göra det till en väldigt angenäm sak. Jobb ska också vara roligt!"
          }
        ]
      },
      "footer": {
        "title": "VILL DU PÅBÖRJA EN NY RESA?",
        "tel": "070-296 00 05",
        "mail": "KONTAKT@ALPHADEV.SE",
        "adress": "VASAGATAN 15, 111 20 STOCKHOLM"
      }
    });
  });
};
