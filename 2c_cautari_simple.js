conn = new Mongo();
db = conn.getDB("test");

//caut toate produsele care sunt fabricate in Turcia
var c1 = db.Produse.find(
    {
        "fabricatie.tara_fabricatie": "Turcia"
    },
    {
        //proiectie
        _id:0, fabricatie:0, furnizori:0
    }
)
// print(c1);

//caut toate produsele care sunt din denim si sunt albastre si le afisez crescator dupa pret
var c2 = db.Produse.find(
    {
        "fabricatie.material_textil" : "denim",
        culori: {$in: ["albastru", "negru"]}
    }
).sort({"furnizori.pret":1})
// print(c2);


//caut toti clientii care sunt din Pitesti sau Iasi si au in lista de dorinte produsul tricou sau blugi
var c3 = db.Clienti.find(
    {
        $and:[
            {$or:[{"adresa.oras": "Pitesti"}, {"adresa.oras":"Iasi"}]},
            {lista_dorinte: {$in: ["blugi", "tricou"]}}
        ]
    }
)
// print(c3);

//caut toate produsele care sunt disponibile pe culoarea bordo si negru
var c4 = db.Produse.find(
    {culori: {$all: ["bordo", "negru"]}}
)
// print(c4)

//caut toate comenzile intre 300-400 lei
var c5 = db.Comenzi.find(
    {
        pret_total: {$gt: 300, $lt:400}
    },
    {//proiectie
        data_comenzii: 1, pret_total:1
    }
)
// print(c5)

//caut toate produsele vandute de emag cu pret intre 100-200 lei
var c6 = db.Produse.find(
    {
        "furnizori": {$elemMatch: {nume: "Emag", pret: {$gt: 100, $lte:200}}}
})
// print(c6)

//caut atributul varsta in documentele din colectia Clienti (el nu exista)
var c7 = db.Clienti.find(
    { 
        varsta: { $exists: true } 
    }
)
print(c7)

//preiau 2 articole vandute de zara, exceptandu-l pe primul
var c8 = db.Produse.find(
    {
        "furnizori.nume": "Zara"
    }
).limit(2).skip(1)
print(c8)


var nrDocPerPage = 2;
const pageNumber = 2;
//caut toate tricourile care sunt fabricate in Turcia si se vand cu pret sub 200lei (afisare paginata, 2 elemente pe pagina, prima pagina)

const skipDocs = (pageNumber - 1) * nrDocPerPage

var c9 = db.Produse.find({
    $and: [
      { denumire: "tricou" },
      { "fabricatie.tara_fabricatie": "Turcia" },
      { "furnizori.pret": { $lt: 200 } }
    ]
  }).limit(nrDocPerPage).skip(skipDocs);

// print(c9)

//caut toate comenzile plasate dupa data 2023-3-1 , care au livrare la curier: afisez cate un dpcument pe pagina si vreau a doua pagina
nrDocsPerPage = 1;

var c10 = db.Comenzi.find(
    {
        data_comenzii: {$gte: ISODate("2023-03-01")},
        "detalii.livrare":"curier"
    }
).limit(nrDocsPerPage).skip(skipDocs)

// print(c10)