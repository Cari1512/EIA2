"use strict";
var KebapHouse;
(function (KebapHouse) {
    class Order {
        constructor(_name, _ingredients) {
            this.ingredients = [];
            this.nameOfOrder = "";
            this.nameOfOrder = _name;
            this.ingredients = _ingredients;
        }
    }
    KebapHouse.Order = Order;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Order.js.map