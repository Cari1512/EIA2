namespace HomeHelp {

    export let data: Data = {
        einkaufen: [
            let produkt:  [
            {name: "Apfel", price:10},
            {name: "Brot", price:10},
            {name: "Milch", price:10},
            {name: "Eier", price:10},
            {name: "Nudeln", price:10},
            {name: "Zwiebeln", price:10},
            ],
            menge:[
            { name: "", price:0},
            ],
            einheit:[
            {name: "kg", price:0},
            {name: "Pack", price:0},
            {name: "Gramm", price:0},
            {name: "Liter", price:0},
            {name: "Karton", price:0},
            { name: "Leib", price:0},
            ],
        ]
        
        haushalt: {
            produkt: [
            {name: "Putzen", price:10},
            {name: "Kochen", price:10},
            {name: "Gartenarbeit", price:10},
            ],
            menge: [
            {name: "", price:0},
            ],
            einheit:[
            {name: "Stunden", price:0},
            {name: "Minuten", price:0},
            ],

        },
        fahrdienst: {
            produkt: [
            {name: "Krankenhaus", price:10},
            {name: "Familie/Bekannte", price:10},
            {name: "Supermarkt", price:10},
            ],
            menge: [
            {name: "", price:0},
            ],
            einheit: [
            {name: "Kilometer", price:0},
            {name: "Stunden", price:0},
            {name: "Minuten", price:0},
            ],
        },
            

            
        
       
       
    }

    export let detail: Detail = {
        ort: [
            {name: "Edeka"}, 
            {name: "Aldi"}, 
            {name: "Rewe"}, 
            {name: "Lidl"}
        ],
        fahrt:[
            {name: "Hin-und Rückfahrt"}, 
            {name: "eine Fahrt"}, 
        ]
        

    }

}