namespace Haushaltshilfe {
    export let Data: Data = {
        Einkaufen: [
            {category: "Produkt", name: "Apfel", price:10},
            {category: "Produkt", name: "Brot", price:10},
            {category: "Produkt", name: "Milch", price:10},
            {category: "Produkt", name: "Eier", price:10},
            {category: "Produkt", name: "Nudeln", price:10},
            {category: "Produkt", name: "Zwiebeln", price:10},
            {category: "Menge", name: "", price:0},
            {category: "Einheit", name: "kg", price:0},
            {category: "Einheit", name: "Pack", price:0},
            {category: "Einheit", name: "Gramm", price:0},
            {category: "Einheit", name: "Liter", price:0},
            {category: "Einheit", name: "Karton", price:0},
            {category: "Einheit", name: "Leib", price:0},

        ],
        Haushalt: [
            {category: "Produkt", name: "Putzen", price:10},
            {category: "Produkt", name: "Kochen", price:10},
            {category: "Produkt", name: "Gartenarbeit", price:10},
            {category: "Menge", name: "", price:0},
            {category: "Einheit", name: "Stunden", price:0},
            {category: "Einheit", name: "Minuten", price:0},

        ],
        Fahrdienst: [
            {category: "Produkt", name: "Krankenhaus", price:10},
            {category: "Produkt", name: "Familie/Bekannte", price:10},
            {category: "Produkt", name: "Supermarkt", price:10},
            {category: "Menge", name: "", price:0},
            {category: "Einheit", name: "Kilometer", price:0},
            {category: "Einheit", name: "Stunden", price:0},
            {category: "Einheit", name: "Minuten", price:0},

        ],
            

            
        
       
       
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