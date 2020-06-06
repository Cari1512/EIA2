namespace L07 {

    export let data: Data = {
        
        product: [
            {name: "Apfel",unit:"kg", price:10},
            {name: "Brot",unit:"Laib",  price:10},
            {name: "Milch",unit:"Liter",  price:10},
            {name: "Eier", unit:"Karton", price:10},
            {name: "Nudeln",unit:"Gramm",  price:10},
            {name: "Zwiebeln",unit:"Stück",  price:10},
            ],
            
        household: [
            {name: "Putzen", unit:"1h", price:10},
            {name: "Kochen", unit:"1h", price:10},
            {name: "Gartenarbeit", unit:"1h", price:10},
        ],

        driving: [
            {name: "Supermarkt", unit: "km", price:10},
            {name: "Krankenhaus", unit: "km", price:10},
            {name: "Bekannte/Familie", unit: "km", price:10},
        ]    
        
       
       
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