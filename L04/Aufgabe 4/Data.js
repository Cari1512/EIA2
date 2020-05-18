"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Haushaltshilfe;
(function (Haushaltshilfe) {
    Haushaltshilfe.Data = {
        Einkaufen: {
            Produkt: [
                { name: "Apfel", price: 10 },
                { name: "Brot", price: 10 },
                { name: "Milch", price: 10 },
                { name: "Eier", price: 10 },
                { name: "Nudeln", price: 10 },
                { name: "Zwiebeln", price: 10 },
            ],
            Menge: [
                { name: "", price: 0 },
            ],
            Einheit: [
                { name: "kg", price: 0 },
                { name: "Pack", price: 0 },
                { name: "Gramm", price: 0 },
                { name: "Liter", price: 0 },
                { name: "Karton", price: 0 },
                { name: "Leib", price: 0 },
            ],
        }
    };
})(Haushaltshilfe || (Haushaltshilfe = {}));
exports.detail = {
    Ort: [
        { name: "Edeka" },
        { name: "Aldi" },
        { name: "Rewe" },
        { name: "Lidl" }
    ],
    Fahrt: [
        { name: "Hin-und Rückfahrt" },
        { name: "eine Fahrt" },
    ]
};
//# sourceMappingURL=Data.js.map