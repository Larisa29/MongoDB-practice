conn = new Mongo();
db = conn.getDB("test");

//modific colectia produse

//schimb culorile articolului cu id-ul 2
db.Produse.updateOne(
    {_id: 2},
    {
        $set: {
            "culori":["verde", "alb", "albastru", "bordo", "negru"]
        }
    }
)

//modific toate documentele care au tara de origine Turcia sa aiba pretul mai mare cu 20
db.Produse.updateMany(
    {"fabricatie.tara_fabricatie": "Turcia"},
    {$inc: {"furnizori.$[].pret": 20}}
)

//modific toate comenzile cu pret_total < 400 sa aiba livrarea cu plata
db.Comenzi.updateMany(
    {pret_total: {$lte: 400}},
    {$set: {"transport_gratuit": "False"}}
)


//pentru toate produsele care sunt vandute de Emag, sa mai adaug ca sunt vandute si de magazinul "Bazar", cu caracteristicile lui
db.Produse.updateMany(
    {"furnizori.nume":"Emag"},
    {$push: {"furnizori":{nume: "Bazar", email:"bazar@yahoo.com", pret:300}}}
);
// print("update complete");


//sterg toate documentele din Clienti care au lista de dorinte vida
db.Clienti.deleteMany(
    {lista_dorinte: {$size: 0}
});

//stergerea primului document care are in adresa orasul Oradea
db.Clienti.deleteOne(
    {"adresa.oras": "Oradea"}
)

//sterg toate documentele din Clienti care au campul nume=Ivan
db.Clienti.deleteMany(
    {prenume: "Ciprian-Marian"}
);

//bulk 
try{
    db.Clienti.bulkWrite(
        [
            {
                insertOne: 
                {
                    "document": {"nume":"Popa", "prenume":"Alexandru", "adresa":{"oras":"Giurgiu", "strada":"Florilor 4C", "bloc":"9B", "apartament": 12}, "contact":{"telefon":"0744231334", "email":"alexandru.popa@outlook.com"}, "lista_dorinte":["tricou"]}

                }
            },
            {
                insertOne: 
                {
                    "document": {"nume":"Ivan", "prenume":"Ciprian", "adresa":{"oras":"Bucuresti", "strada":"Mizil 4C", "bloc":"5A", "apartament": 44}, "contact":{"telefon":"0746554667", "email":"ciprian.ivan@outlook.com"}, "lista_dorinte":["tricou", "geaca", "blugi"]}

                }
            },
            {
                updateOne:
                {
                    "filter": {"nume":"Popa"},
                    "update": {$set: {"lista_dorinte": ["blugi"]}}
                }
            },
            {
                replaceOne:
                {
                    "filter": {"nume": "Ivan"},
                    "replacement":{"nume": "Ivan", "prenume": "Ciprian-Marian", "adresa":{"oras":"Bucuresti", "strada":"Mizil 4C", "bloc":"5A", "apartament": 23}, "contact":{"telefon":"0746554667", "email":"ciprian.ivan@outlook.com"}, "lista_dorinte":["tricou", "geaca", "blugi"]}
                }
            },
            {
                deleteOne:
                {
                    "filter": {"prenume": "Daniela-Marta"}
                }
            }

        ]
    );
}
catch (e){
    print(e)
}