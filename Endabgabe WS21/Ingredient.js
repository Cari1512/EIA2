"use strict";
var KebapHouse;
(function (KebapHouse) {
    let INGREDIENT;
    (function (INGREDIENT) {
        INGREDIENT[INGREDIENT["MEAT"] = 0] = "MEAT";
        INGREDIENT[INGREDIENT["TOMATO"] = 1] = "TOMATO";
        INGREDIENT[INGREDIENT["SALAD"] = 2] = "SALAD";
        INGREDIENT[INGREDIENT["ONION"] = 3] = "ONION";
        INGREDIENT[INGREDIENT["CABBAGE"] = 4] = "CABBAGE";
        INGREDIENT[INGREDIENT["KEBAB"] = 5] = "KEBAB";
        INGREDIENT[INGREDIENT["YUFKA"] = 6] = "YUFKA";
        INGREDIENT[INGREDIENT["LAHMACUN"] = 7] = "LAHMACUN";
        INGREDIENT[INGREDIENT["SPICY"] = 8] = "SPICY";
    })(INGREDIENT = KebapHouse.INGREDIENT || (KebapHouse.INGREDIENT = {}));
    class Ingredient {
        // Function that returns ingredient as string
        getIngredient(_ingredient) {
            switch (_ingredient) {
                case 0: return "Meat";
                case 1: return "Tomato";
                case 2: return "Salad";
                case 3: return "Onion";
                case 4: return "Cabbage";
                case 5: return "Kebab";
                case 6: return "Yufka";
                case 7: return "Lahmacun";
                case 8: return "Spicy";
                default: return "No ingredient";
            }
        }
    }
    KebapHouse.Ingredient = Ingredient;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Ingredient.js.map