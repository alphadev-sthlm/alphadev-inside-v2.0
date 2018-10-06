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
                "members": [
                    {
                        "name": "Leon Hennings",
                        "title": "Utvecklare",
                        "image": "peeps/leon_sml.png"
                    },
                    {
                        "name": "Sammi Haj Hassine",
                        "title": "Utvecklare",
                        "image": "peeps/sammi_sml.png"
                    },
                    {
                        "name": "Olle Kallström",
                        "title": "Utvecklare",
                        "image": "peeps/olle_sml.jpg"
                    },
                    {
                        "name": "Jon Neergaard",
                        "title": "VD",
                        "image": "peeps/jon_sml.jpg"
                    },
                    {
                        "name": "Jens Ohlsson",
                        "title": "Utvecklare",
                        "image": "peeps/jens_sml.png"
                    },
                    {
                        "name": "Jonas Montonen",
                        "title": "Utvecklare",
                        "image": "peeps/jonas_sml.jpg"
                    },
                    {
                        "name": "Peter Österdahl",
                        "title": "Utvecklare",
                        "image": "peeps/peter_sml.jpg"
                    },
                    {
                        "name": "Daniel Lundström",
                        "title": "Utvecklare",
                        "image": "peeps/daniel_sml.jpg"
                    },
                    {
                        "name": "Daniel Hamner",
                        "title": "Utvecklare",
                        "image": "peeps/hamner_sml.png"
                    },
                    {
                        "name": "Fredrik Bergström",
                        "title": "Utvecklare",
                        "image": "peeps/fredrik_sml.jpg"
                    },
                    {
                        "name": "Eduardo Castaneda",
                        "title": "Utvecklare",
                        "image": "peeps/eddo_sml.png"
                    },
                    {
                        "name": "Johan Windahl",
                        "title": "Business manager",
                        "image": "peeps/johan_w_sml.jpg"
                    },
                    {
                        "name": "Johan Lindgren",
                        "title": "Utvecklare",
                        "image": "peeps/johan_l_sml.jpg"
                    },
                    {
                        "name": "Tommy Lindberg",
                        "title": "Utvecklare",
                        "image": "peeps/tommy_sml.jpg"
                    },
                    {
                        "name": "Erik Scherman",
                        "title": "Utvecklare",
                        "image": "peeps/scherman_sml.png"
                    },
                    {
                        "name": "Helena Tehler",
                        "title": "Projektledare",
                        "image": "peeps/helena_sml.png"
                    },
                    {
                        "name": "Anders Ulfheden",
                        "title": "Utvecklare",
                        "image": "peeps/anders_sml.png "
                    },
                    {
                        "name": "Johan Forsman",
                        "title": "Utvecklare",
                        "image": "peeps/Forsman4_sml_bw.png "
                    },
                    {
                        "name": "Robert Wideberg",
                        "title": "Utvecklare",
                        "image": "peeps/robert_sml_bw.png"
                    },
                    {
                        "name": "Johan Andersson",
                        "title": "Utvecklare",
                        "image": "peeps/johan_andersson_sml_bw.png"
                    },
                    {
                        "name": "Markus Rantanikunen",
                        "title": "Utvecklare",
                        "image": "peeps/markus_sml_bw.png"
                    },
                    {
                        "name": "Marcus Höjvall",
                        "title": "Utvecklare",
                        "image": "peeps/marcus_sml_bw.png"
                    }
                ]
            },
            "customers": {},
            "gallery": {},
            "timeline": {},
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
                "title": "VILL DU FÖLJA MED PÅ EN NY RESA?"
            }
        });
    });
};
