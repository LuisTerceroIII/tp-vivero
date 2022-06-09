const plants = [
    {
        imgSrc: "../img/mexicanFlame.jpg",
        familyName: "ACTINIDIACEAE",
        commonName: "Mexican flame",
        mainColor: "Rojo",
        typeOfSoil: "Neutro",
        ambientTemperature: "20",
        irrigationCycle: "Mucha"
    },
    {
        imgSrc: "../img/aphelandra-scabra.jpg",
        familyName: "Acanthaceae",
        commonName: "Añilillo",
        mainColor: "Rojo",
        typeOfSoil: "Neutro",
        ambientTemperature: "15",
        irrigationCycle: "Mucha"
    },
    {
        imgSrc: "../img/little.jpg",
        familyName: "ACTINIDIACEAE",
        commonName: "Littleleaf wrightwort",
        mainColor: "Purpura",
        typeOfSoil: "Neutro",
        ambientTemperature: "25",
        irrigationCycle: "Poca"
    },
    {
        imgSrc: "../img/Baby_sun_rose.jpg",
        familyName: "AIZOACEAE",
        commonName: "Baby sun rose",
        mainColor: "Verde",
        typeOfSoil: "Acido",
        ambientTemperature: "30",
        irrigationCycle: "Mucha"
    },
    {
        imgSrc: "../img/flor-con-visitante.jpg",
        familyName: "ALLIACEAE",
        commonName: "Cebolleja",
        mainColor: "Blanco",
        typeOfSoil: "Neutro",
        ambientTemperature: "30",
        irrigationCycle: "Poca"
    },

    {
        imgSrc: "../img/habito1.jpg",
        familyName: "AMARANTHACEAE",
        commonName: "Washerwoman",
        mainColor: "Verde",
        typeOfSoil: "Neutro",
        ambientTemperature: "30",
        irrigationCycle: "Mucha"
    },
    {
        imgSrc: "../img/ficha7.jpg",
        familyName: "AMARYLLIDACEAE",
        commonName: "Zarcillo",
        mainColor: "Rojo",
        typeOfSoil: "Neutro",
        ambientTemperature: "30",
        irrigationCycle: "Mucha"
    },
    {
        imgSrc: "../img/pitul.jpg",
        familyName: "ANACARDIACEAE",
        commonName: "Pirul",
        mainColor: "verde",
        typeOfSoil: "basico",
        ambientTemperature: "20",
        irrigationCycle: "Mucha"
    },
    {
        imgSrc: "../img/CRASSULACEAE.jpg",
        familyName: "CRASSULACEAE",
        commonName: "orpine",
        mainColor: "verde",
        typeOfSoil: "basico",
        ambientTemperature: "20",
        irrigationCycle: "Poca"
    },
    {
        imgSrc: "../img/ericaceae.jpg",
        familyName: "ERICACEAE",
        commonName: "Dicotiledóneas",
        mainColor: "rosa",
        typeOfSoil: "Acido",
        ambientTemperature: "40",
        irrigationCycle: "Mucha"
    },
    {
        imgSrc: "../img/EUPHORBIACEAEE.jpeg",
        familyName: "EUPHORBIACEAEE",
        commonName: "spurge",
        mainColor: "verde",
        typeOfSoil: "Neutro",
        ambientTemperature: "10",
        irrigationCycle: "Mucha"
    },
    {
        imgSrc: "../img/FAGACEAE.jpg",
        familyName: "FAGACEAE",
        commonName: "beech",
        mainColor: "verde-marron",
        typeOfSoil: "basico",
        ambientTemperature: "30",
        irrigationCycle: "Poca"
    },
    {
        imgSrc: "../img/GINKGOACEAE.jpg",
        familyName: "GINKGOACEAE",
        commonName: "Ginkgo biloba",
        mainColor: "verde-claro",
        typeOfSoil: "basico",
        ambientTemperature: "50",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/HAMAMELIDACEAE.jpg",
        familyName: "HAMAMELIDACEAE",
        commonName: "Árbol de hierro",
        mainColor: "beige-turquesa",
        typeOfSoil: "Neutro",
        ambientTemperature: "22",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/JUGLANDACEAE.jpg",
        familyName: "JUGLANDACEAE ",
        commonName: "Taxonomía",
        mainColor: "verde",
        typeOfSoil: "Acido",
        ambientTemperature: "40",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/Lamiales.jpg",
        familyName: "LAMIACEAE  ",
        commonName: "Lamiales",
        mainColor: "turquesa",
        typeOfSoil: "Acido",
        ambientTemperature: "10",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/LAURACEAE.jpg",
        familyName: "LAURACEAE",
        commonName: "laurea",
        mainColor: "verde-oscuro",
        typeOfSoil: "Acido",
        ambientTemperature: "29",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/LILIACEAE.jpg",
        familyName: "LILIACEAE",
        commonName: "Lilium henryi",
        mainColor: "amarillo",
        typeOfSoil: "neutro",
        ambientTemperature: "20",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/MAGNOLIACEAE.jpg",
        familyName: "MAGNOLIACEAE ",
        commonName: "magnolia grandiflora",
        mainColor: "amarillo-rosado",
        typeOfSoil: "neutro",
        ambientTemperature: "10",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/RHAMNACEAE.jpg",
        familyName: "RHAMNACEAE ",
        commonName: "Colubrina arborescens",
        mainColor: "verde",
        typeOfSoil: "basico",
        ambientTemperature: "30",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/melocotonero.jpg",
        familyName: "ROSACEAE ",
        commonName: "melocotonero",
        mainColor: "rosado",
        typeOfSoil: "basico",
        ambientTemperature: "10",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/RUBIACEAE.jpg",
        familyName: "RUBIACEAE",
        commonName: "Juss",
        mainColor: "amarillo",
        typeOfSoil: "neutro",
        ambientTemperature: "30",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/Cupania.jpg",
        familyName: "Cupania americana L",
        commonName: "Guárana",
        mainColor: "amarillo",
        typeOfSoil: "Neutro",
        ambientTemperature: "10",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/SCROPHULARIACEAE.jpg",
        familyName: "SCROPHULARIACEAE",
        commonName: "Bacopa",
        mainColor: "blanco",
        typeOfSoil: "neutro",
        ambientTemperature: "45",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/SOLANACEAE.jpg",
        familyName: "SOLANACEAE ",
        commonName: "Solanum tuberosum",
        mainColor: "violeta",
        typeOfSoil: "basico",
        ambientTemperature: "30",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/TAMARICACEAE.jpg",
        familyName: "TAMARICACEAE ",
        commonName: "TARAY",
        mainColor: "blanco",
        typeOfSoil: "neutro",
        ambientTemperature: "20",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/VITACEAE.jpg",
        familyName: "VITACEAE ",
        commonName: "Vitis",
        mainColor: "verde",
        typeOfSoil: "Acido",
        ambientTemperature: "10",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/VERBENACEAE.jpeg",
        familyName: "VERBENACEAE ",
        commonName: "Lantana camara",
        mainColor: "naranja",
        typeOfSoil: "neutro",
        ambientTemperature: "20",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/VALERIANACEAE.jpg",
        familyName: "VALERIANACEAE ",
        commonName: "Magnoliopsida",
        mainColor: "rosado",
        typeOfSoil: "neutro",
        ambientTemperature: "25",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/Orchidaceae.jpg",
        familyName: "Orchidaceae",
        commonName: "orquídeas",
        mainColor: "marron",
        typeOfSoil: "acido",
        ambientTemperature: "35",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/Fabaceae.jpg",
        familyName: "Fabaceae",
        commonName: "leguminosas",
        mainColor: "amarillo",
        typeOfSoil: "neutro",
        ambientTemperature: "12",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/Poaceae.jpg",
        familyName: "Poaceae ",
        commonName: "gramíneas",
        mainColor: "verde-claro",
        typeOfSoil: "acido",
        ambientTemperature: "25",
        irrigationCycle: "mucho"
    },
    {
        imgSrc: "../img/Chenopodioideae.jpg",
        familyName: "Chenopodioideae",
        commonName: "amarantáceas",
        mainColor: "verde",
        typeOfSoil: "acido",
        ambientTemperature: "55",
        irrigationCycle: "mucho"
    }, {
        imgSrc: "../img/Boraginaceae.jpg",
        familyName: "Boraginaceae",
        commonName: "borragináceas",
        mainColor: "lila",
        typeOfSoil: "acido",
        ambientTemperature: "30",
        irrigationCycle: "mucha"
    }, {
        imgSrc: "../img/Byblidaceae.jpg",
        familyName: "Byblidaceae",
        commonName: "Byblis",
        mainColor: "rosado",
        typeOfSoil: "basico",
        ambientTemperature: "10",
        irrigationCycle: "poca"
    }
    , {
        imgSrc: "../img/Caprifoliaceae.jpg",
        familyName: "Caprifoliaceae",
        commonName: "caprifoliáceas ",
        mainColor: "rosado",
        typeOfSoil: "neutro",
        ambientTemperature: "20",
        irrigationCycle: "mucha"
    },
    {
        imgSrc: "../img/Cephalotaxaceae.jpg",
        familyName: "Cephalotaxaceae",
        commonName: "cefalotaxos ",
        mainColor: "verde",
        typeOfSoil: "basico",
        ambientTemperature: "10",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/Caryophyllaceae.jpg",
        familyName: "Caryophyllaceae ",
        commonName: "Stellaria  ",
        mainColor: "blanco",
        typeOfSoil: "neutro",
        ambientTemperature: "20",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/Casuarinaceae.jpg",
        familyName: "Casuarinaceae ",
        commonName: "palo hierro ",
        mainColor: "marron-claro",
        typeOfSoil: "basico",
        ambientTemperature: "15",
        irrigationCycle: "poca"
    },
    {
        imgSrc: "../img/Caricaceae.jpg",
        familyName: "Caricaceae  ",
        commonName: "papaya",
        mainColor: "verde-claro",
        typeOfSoil: "neutro",
        ambientTemperature: "10",
        irrigationCycle: "poca"
    },
]


