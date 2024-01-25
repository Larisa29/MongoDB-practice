conn = new Mongo();
db = conn.getDB("test");

db.createCollection("Comenzi");

db.Comenzi.insertOne(
    {
        data_comenzii: new Date("2023-2-19"),
        pret_total: 250,
        transport_gratuit: false,
        detalii:{
            plata: "ramburs",
            livrare: "curier"
        }
    }
)

db.Comenzi.insertMany([
    {
        data_comenzii: new Date("2023-2-19"),
        pret_total: 165,
        transport_gratuit: false,
        detalii:{
            plata: "online",
            livrare: "curier"
        }
    },
    {
        data_comenzii: new Date("2023-2-25"),
        pret_total: 350,
        transport_gratuit: true,
        detalii:{
            plata: "online",
            livrare: "posta"
        }
    },
    {
        data_comenzii: new Date("2023-3-9"),
        pret_total: 400,
        transport_gratuit: true,
        detalii:{
            plata: "ramburs",
            livrare: "curier"
        }
    },
    {
        data_comenzii: new Date("2023-4-22"),
        pret_total: 328.95,
        transport_gratuit: true,
        detalii:{
            plata: "online",
            livrare: "posta"
        }
    },
    {
        data_comenzii: new Date("2023-4-18"),
        pret_total: 355,
        transport_gratuit: true,
        detalii:{
            plata: "ramburs",
            livrare: "curier"
        }
    }]
)
