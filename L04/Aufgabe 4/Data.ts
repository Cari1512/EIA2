namespace Haushaltshilfe {
    export let Data: Data = {
        Einkaufen: {
            Produkt: [
            {name: "Apfel", price:10},
            {name: "Brot", price:10},
            {name: "Milch", price:10},
            {name: "Eier", price:10},
            {name: "Nudeln", price:10},
            {name: "Zwiebeln", price:10},
            ],
            Menge:[
            { name: "", price:0},
            ],
            Einheit:[
            {name: "kg", price:0},
            {name: "Pack", price:0},
            {name: "Gramm", price:0},
            {name: "Liter", price:0},
            {name: "Karton", price:0},
            { name: "Leib", price:0},
            ],
            }
        },
        Haushalt: {
            Produkt: [
            {name: "Putzen", price:10},
            {name: "Kochen", price:10},
            {name: "Gartenarbeit", price:10},
            ],
            Menge: [
            {name: "", price:0},
            ],
            Einheit:[
            {name: "Stunden", price:0},
            {name: "Minuten", price:0},
            ],

        },
        Fahrdienst: {
            Produkt: [
            {name: "Krankenhaus", price:10},
            {name: "Familie/Bekannte", price:10},
            {name: "Supermarkt", price:10},
            ],
            Menge: [
            {name: "", price:0},
            ],
            Einheit: [
            {name: "Kilometer", price:0},
            {name: "Stunden", price:0},
            {name: "Minuten", price:0},
            ],
        },
            

            
        
       
       
    }

    export let detail: Detail = {
        Ort: [
            {name: "Edeka"}, 
            {name: "Aldi"}, 
            {name: "Rewe"}, 
            {name: "Lidl"}
        ],
        Fahrt:[
            {name: "Hin-und Rückfahrt"}, 
            {name: "eine Fahrt"}, 
        ]
        

    }
}
