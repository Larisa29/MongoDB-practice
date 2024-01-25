const conn = new Mongo()
const db = conn.getDB("test");

db.createCollection("Produse");
print("operation succesfully succedeed");


db.Produse.insertOne({
    _id: NumberInt(1),
    denumire: "tricou",
    fabricatie:{
        material_textil: "bumbac",
        tara_fabricatie: "Turcia"
    },
    culori: ["negru", "verde", "bordo"],
    furnizori:[
        {
            nume:"Fashion Days",
            email: "fashiondays@yahoo.com",
            pret: 65.95
        },
        {
            nume:"H&M",
            email: "contactH&M@gmail.com",
            pret: 55.00
        }
    ]

})


db.Produse.insertMany([
    {
        _id: NumberInt(2),
        denumire: "geaca",
        fabricatie:{
            material_textil: "denim",
            tara_fabricatie: "China"
        },
        culori: ["negru", "albastru"],
        furnizori:[
            {
                nume:"Fashion Days",
                email: "fashiondays@yahoo.com",
                pret: 150.99
            },
            {
                nume:"Zara",
                email: "zara@gmail.com",
                pret: 145.99
            },
            {
                nume:"Emag",
                email: "emag@outlook.com",
                pret: 200
            }
        ]
    },
    {
        _id: NumberInt(3),
        denumire: "tricou",
        fabricatie:{
            material_textil: "poliester",
            tara_fabricatie: "Turcia"
        },
        culori: ["rosu", "mov", "alb"],
        furnizori:[
            {
                nume:"DenizeDress",
                email: "denizedress@yahoo.com",
                pret: 89
            },
            {
                nume:"Emag",
                email: "emag@outlook.com",
                pret: 110
            }
        ]
    },
    {
        _id: NumberInt(4),
        denumire: "blugi",
        fabricatie:{
            material_textil: "denim",
            tara_fabricatie: "India"
        },
        culori: ["negru", "albastru", "bordo"],
        furnizori:[
            {
                nume:"Collins",
                email: "collins@gmail.com",
                pret: 259
            },
            {
                nume:"Fashion Days",
                email: "fashiondays@yahoo.com",
                pret: 300
            }
        ]
    }
])



db.Produse.insertMany([
    {
        _id: NumberInt(5),
        denumire: "hanorac",
        fabricatie:{
            material_textil: "denim",
            tara_fabricatie: "China"
        },
        culori: ["albastru"],
        furnizori:[
            {
                nume:"Fashion Days",
                email: "fashiondays@yahoo.com",
                pret: 200
            },
            {
                nume:"Zara",
                email: "zara@gmail.com",
                pret: 220
            }
        ]
    },
    {
        _id: NumberInt(6),
        denumire: "blugi",
        fabricatie:{
            material_textil: "denim",
            tara_fabricatie: "India"
        },
        culori: ["albastru", "alb", "mov", "rosu"],
        furnizori:[
            {
                nume:"DenizeDress",
                email: "denizedress@yahoo.com",
                pret: 300
            },
            {
                nume:"Zara",
                email: "zara@gmail.com",
                pret: 300
            }
        ]
    },
    {
        _id: NumberInt(7),
        denumire: "hanorac",
        fabricatie:{
            material_textil: "denim",
            tara_fabricatie: "Turcia"
        },
        culori: ["albastru", "gri"],
        furnizori:[
            {
                nume:"H&M",
                email: "contactH&M@gmail.com",
                pret: 175
            },
            {
                nume:"Zara",
                email: "zara@gmail.com",
                pret: 190
            },
            {
                nume:"Emag",
                email: "emag@outlook.com",
                pret: 250
            }
        ]
    }
])


db.Produse.insertOne({
    _id: NumberInt(8),
    denumire: "tricou",
    fabricatie:{
        material_textil: "bumbac",
        tara_fabricatie: "Turcia"
    },
    culori: ["negru", "verde"],
    furnizori:[
        {
            nume:"Fashion Days",
            email: "fashiondays@yahoo.com",
            pret: 110
        },
        {
            nume:"H&M",
            email: "contactH&M@gmail.com",
            pret: 110
        },
        {
            nume:"Bazar",
            email: "bazar@yahoo.com",
            pret: 95
        }
    ]

})

db.Produse.insertOne({
_id: NumberInt(9),
denumire: "geaca",
fabricatie:{
    material_textil: "piele",
    tara_fabricatie: "Turcia"
},
culori: ["negru", "alb"],
furnizori:[
    {
        nume:"Fashion Days",
        email: "fashiondays@yahoo.com",
        pret: 300
    },
    {
        nume:"Bazar",
        email: "bazar@yahoo.com",
        pret: 250
    },
    {
        nume:"H&M",
        email: "contactH&M@gmail.com",
        pret: 289
    }
]

})


print("Documents inserted successfully.");
