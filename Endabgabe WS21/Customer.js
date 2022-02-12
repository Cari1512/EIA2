"use strict";
var KebapHouse;
(function (KebapHouse) {
    let CUSTOMER_SITUATION;
    (function (CUSTOMER_SITUATION) {
        CUSTOMER_SITUATION[CUSTOMER_SITUATION["QUEUE"] = 0] = "QUEUE";
        CUSTOMER_SITUATION[CUSTOMER_SITUATION["WAITING"] = 1] = "WAITING";
        CUSTOMER_SITUATION[CUSTOMER_SITUATION["LEAVING"] = 2] = "LEAVING";
    })(CUSTOMER_SITUATION || (CUSTOMER_SITUATION = {}));
    class Customer extends KebapHouse.Human {
        constructor(_position) {
            super(_position);
            this.state = CUSTOMER_SITUATION.QUEUE;
            this.velocity.set(150, 0);
            this.order = this.generateOrder();
        }
        draw() {
            KebapHouse.crc2.beginPath();
            KebapHouse.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            //console.log(this.position.x, this.position.y);
            KebapHouse.crc2.strokeStyle = "#FF0000";
            KebapHouse.crc2.lineWidth = 3;
            KebapHouse.crc2.stroke();
            KebapHouse.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.velocity.set(0, -10);
            switch (this.state) {
                case CUSTOMER_SITUATION.QUEUE:
                    if (this.position == new KebapHouse.Vector(this.position.x, 300)) {
                        this.velocity.set(0, 0);
                        this.state = CUSTOMER_SITUATION.WAITING;
                        break;
                    }
                    else {
                        this.velocity.set(0, -10);
                    }
            }
        }
        generateOrder() {
            let allOrders = [
                new KebapHouse.Order("Normaler Döner", [KebapHouse.INGREDIENT.KEBAB, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE]),
                new KebapHouse.Order("Döner ohne Zwiebeln", [KebapHouse.INGREDIENT.KEBAB, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.CABBAGE]),
                new KebapHouse.Order("Döner mit scharf", [KebapHouse.INGREDIENT.KEBAB, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE, KebapHouse.INGREDIENT.SPICY]),
                new KebapHouse.Order("Normaler Yufka", [KebapHouse.INGREDIENT.YUFKA, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE]),
                new KebapHouse.Order("Yufka mit scharf", [KebapHouse.INGREDIENT.KEBAB, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE, KebapHouse.INGREDIENT.SPICY]),
                new KebapHouse.Order("Normaler Lahmacun", [KebapHouse.INGREDIENT.LAHMACUN, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE]),
            ];
            let randomNumber = Math.floor(Math.random() * allOrders.length);
            console.log(allOrders[randomNumber]);
            return allOrders[randomNumber];
        }
    }
    KebapHouse.Customer = Customer;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Customer.js.map