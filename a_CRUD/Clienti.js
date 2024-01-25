conn = new Mongo();
db = conn.getDB("test");

db.createCollection("Clienti");
db.Clienti.insertMany([
    {
        nume: "Miron",
        prenume: "Daniela-Marta",
        adresa:{
            oras: "Oradea",
            strada: "Martisor nr.2A",
            bloc: "K1",
            apartament: 16
        },
        contact:{
            telefon: "0744563112",
            email: "daniela.miron@yahoo.com"
        },
        lista_dorinte:["tricou", "geaca", "blugi"]
    },
    {
        nume: "Simon",
        prenume: "Claudiu",
        adresa:{
            oras: "Pitesti",
            strada: "Orhidee nr.5",
            bloc: "G1",
            apartament: 3
        },
        contact:{
            telefon: "0755234134",
            email: "claudiu.simon@gmail.com"
        },
        lista_dorinte:["tricou"]
    },
    {
        nume: "Gherca",
        prenume: "Daniel",
        adresa:{
            oras: "Pascani",
            strada: "LAlelelor nr.1A",
            bloc: "A1",
            apartament: 44
        },
        contact:{
            telefon: "0743321554",
            email: "daniel_gherca@yahoo.com"
        },
        lista_dorinte:[]
    },
    {
        nume: "Sandu",
        prenume: "Anisia",
        adresa:{
            oras: "Oradea",
            strada: "Martisor nr.2A",
            bloc: "K1",
            apartament: 22
        },
        contact:{
            telefon: "0756888993",
            email: "anisiasandu@yahoo.com"
        },
        lista_dorinte:["geaca", "blugi"]
    },
    {
        nume: "Condrea",
        prenume: "Mihail",
        adresa:{
            oras: "Iasi",
            strada: "Sf. Lazar 4C",
            bloc: "B4",
            apartament: 11
        },
        contact:{
            telefon: "0766198776",
            email: "mihail.condrea@yahoo.com"
        },
        lista_dorinte:["blugi"]
    },
    {
        nume: "Asavinei",
        prenume: "Vlad",
        adresa:{
            oras: "Constanta",
            strada: "Fierarului nr.2B",
            bloc: "B1",
            apartament: 20
        },
        contact:{
            telefon: "0788273844",
            email: "asavinei.vlad@outlook.com"
        },
        lista_dorinte:["tricou", "geaca"]
    }
]
)

db.Clienti.insertMany([
    {
        nume: "Stoleru",
        prenume: "Bianca",
        adresa:{
            oras: "Oradea",
            strada: "Martisor nr.5A",
            bloc: "B1",
            apartament: 10
        },
        contact:{
            telefon: "0744509901",
            email: "bianca.stoleru@yahoo.com"
        },
        lista_dorinte:["geaca", "blugi", "hanorac"]
    },
    {
        nume: "Stoica",
        prenume: "Alin",
        adresa:{
            oras: "Pitesti",
            strada: "Orhidee nr.5",
            bloc: "B2",
            apartament: 19
        },
        contact:{
            telefon: "0766123311",
            email: "alin_stoica@yahoo.com"
        },
        lista_dorinte:["geaca", "blugi", "hanorac", "tricou"]
    },
    {
        nume: "Simina",
        prenume: "Alexandru",
        adresa:{
            oras: "Iasi",
            strada: "Sf. Lazar nr.6",
            bloc: "A2",
            apartament: 45
        },
        contact:{
            telefon: "0766899876",
            email: "alexandru.simina@yahoo.com"
        },
        lista_dorinte:["geaca", "blugi", "tricou"]
    }
])