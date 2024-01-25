var conn = new Mongo()
var db = conn.getDB("test")

//caut toti clientii a caror nume incepe cu "S" si care au in lista de dorinte blugi si geaca
var cursor1 = db.Clienti.find(
    {
        nume: {$regex: "^S"},
        lista_dorinte: {$all: ["geaca", "blugi"]}
    }
);

while (cursor1.hasNext())
{
    const document = cursor1.next();
    //daca clientul este din orasul Oradea sau Pitesti, atunci pun anumite date ale lui intr-o lista de rezultate
    // printjson(document);
    // print("--------------------------------------")
    if (document.adresa.oras == "Oradea" || document.adresa.oras == "Pitesti")
    {
        var client = document.nume + " " + document.prenume + " are in lista de dorinte articolele:{" + document.lista_dorinte + "}";
        print(client)
    }
}



// //aggregate: suma vanzarilor grupata pe tipul de livrare (posta sau curier), care au de platit si transportul (transport_gratuit=False)
result = db.Comenzi.aggregate([
    {$match: {"transport_gratuit": "False"}}, //filtru
    {$group: {_id:"$detalii.livrare", suma_totala: {$sum: "$pret_total"}}}
]).toArray();
// printjson(result);


/* sortez crescator fiecare produs in functie de furnizorii care il vand dupa pret -- afisez id produs + pret */
rez = db.Produse.aggregate([
    {
        $unwind: "$furnizori"
    },
    {
        $project: {_id: 1, "furnizori.pret":1}
    },
    {
        $sort: {"furnizori.pret":1}
    }
]).toArray();
// printjson(rez);