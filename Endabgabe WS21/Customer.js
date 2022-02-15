"use strict";
var KebapHouse;
(function (KebapHouse) {
    let CUSTOMER_SITUATION;
    (function (CUSTOMER_SITUATION) {
        CUSTOMER_SITUATION[CUSTOMER_SITUATION["QUEUE"] = 0] = "QUEUE";
        CUSTOMER_SITUATION[CUSTOMER_SITUATION["WAITING"] = 1] = "WAITING";
        CUSTOMER_SITUATION[CUSTOMER_SITUATION["LEAVING"] = 2] = "LEAVING";
    })(CUSTOMER_SITUATION = KebapHouse.CUSTOMER_SITUATION || (KebapHouse.CUSTOMER_SITUATION = {}));
    let CUSTOMER_MOOD;
    (function (CUSTOMER_MOOD) {
        CUSTOMER_MOOD[CUSTOMER_MOOD["HAPPY"] = 0] = "HAPPY";
        CUSTOMER_MOOD[CUSTOMER_MOOD["WELL"] = 1] = "WELL";
        CUSTOMER_MOOD[CUSTOMER_MOOD["ANNOYED"] = 2] = "ANNOYED";
        CUSTOMER_MOOD[CUSTOMER_MOOD["FURIOUS"] = 3] = "FURIOUS";
    })(CUSTOMER_MOOD = KebapHouse.CUSTOMER_MOOD || (KebapHouse.CUSTOMER_MOOD = {}));
    class Customer extends KebapHouse.Human {
        constructor(_position) {
            super(_position);
            this.state = CUSTOMER_SITUATION.QUEUE;
            this.mood = CUSTOMER_MOOD.HAPPY;
            this.currentlyWaiting = false;
            this.velocity.set(150, 0);
            this.order = this.generateOrder();
        }
        draw() {
            KebapHouse.crc2.beginPath();
            KebapHouse.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            KebapHouse.crc2.strokeStyle = "#FFC074";
            KebapHouse.crc2.lineWidth = 3;
            KebapHouse.crc2.stroke();
            KebapHouse.crc2.restore();
        }
        // Moves the customer according to current situation
        move(_timeslice) {
            switch (this.state) {
                case CUSTOMER_SITUATION.QUEUE: // Customer is in queue, but hasn't ordered yet
                    let nextCustomer = KebapHouse.customers[KebapHouse.customers.indexOf(this) - 1];
                    if (nextCustomer != undefined) { // When this customer isn't at the front of the line
                        if ((new KebapHouse.Vector((nextCustomer.position.x - this.position.x), (nextCustomer.position.y - this.position.y)).length < 100)) {
                            this.velocity.set(0, 0);
                            break;
                        }
                    }
                    if (this.position.y < 300) { // Stops customer in front of counter
                        this.velocity.set(0, 0);
                        this.state = CUSTOMER_SITUATION.WAITING;
                        this.waiting();
                        break;
                    }
                    else {
                        this.velocity.set(0, -10);
                    }
                    break;
                case CUSTOMER_SITUATION.LEAVING:
                    this.velocity.set(-10, 0);
                    break;
            }
            super.move(_timeslice);
        }
        // Worsens the mood of the customer when waiting too long
        waiting() {
            if (this.currentlyWaiting == false) {
                this.currentlyWaiting = true;
                let customer = this;
                setTimeout(function () {
                    if (customer.state == CUSTOMER_SITUATION.WAITING || CUSTOMER_SITUATION.QUEUE) {
                        customer.mood = customer.mood + 1;
                        customer.currentlyWaiting = false;
                        if (customer.mood == CUSTOMER_MOOD.FURIOUS) { // Customer leaves after not getting food in time
                            customer.state = CUSTOMER_SITUATION.LEAVING;
                            setTimeout(function () {
                                customer.removeFromCustomers();
                            }, 3000);
                        }
                        customer.waiting();
                    }
                }, 15000);
            }
        }
        // Generates a random order for the customer
        generateOrder() {
            let allOrders = [
                new KebapHouse.Order("Döner", [KebapHouse.INGREDIENT.KEBAB, KebapHouse.INGREDIENT.MEAT, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE]),
                new KebapHouse.Order("Döner ohne Zwiebeln", [KebapHouse.INGREDIENT.KEBAB, KebapHouse.INGREDIENT.MEAT, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.CABBAGE]),
                new KebapHouse.Order("Döner mit scharf", [KebapHouse.INGREDIENT.KEBAB, KebapHouse.INGREDIENT.MEAT, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE, KebapHouse.INGREDIENT.SPICY]),
                new KebapHouse.Order("Yufka", [KebapHouse.INGREDIENT.YUFKA, KebapHouse.INGREDIENT.MEAT, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE]),
                new KebapHouse.Order("Yufka mit scharf", [KebapHouse.INGREDIENT.KEBAB, KebapHouse.INGREDIENT.MEAT, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE, KebapHouse.INGREDIENT.SPICY]),
                new KebapHouse.Order("Lahmacun", [KebapHouse.INGREDIENT.LAHMACUN, KebapHouse.INGREDIENT.MEAT, KebapHouse.INGREDIENT.SALAD, KebapHouse.INGREDIENT.TOMATO, KebapHouse.INGREDIENT.ONION, KebapHouse.INGREDIENT.CABBAGE])
            ];
            let randomNumber = Math.round(Math.random() * allOrders.length);
            return allOrders[randomNumber];
        }
        // Receives order, validates it and leaves the store
        receiveOrder(_order) {
            this.validateOrder(this.order, _order);
            if (this.validateOrder(this.order, _order) == true) {
                this.mood = CUSTOMER_MOOD.HAPPY;
            }
            this.state = CUSTOMER_SITUATION.LEAVING;
            setTimeout(function () {
                KebapHouse.customers.splice(0, 1);
            }, 2500);
        }
        // Checks order if it contains the correct ingredients
        validateOrder(_givenOrder, _preparedOrder) {
            _preparedOrder = _preparedOrder.sort((n1, n2) => n1 - n2); // Sorts both orders
            _givenOrder.ingredients = _givenOrder.ingredients.sort((n1, n2) => n1 - n2);
            KebapHouse.soldOrders++;
            for (let i = 0; i < _givenOrder.ingredients.length; i++) { // Checks if ingredients match
                if (_givenOrder.ingredients[i] != _preparedOrder[i]) {
                    return false;
                }
            }
            return true;
        }
        // Removes customer from array
        removeFromCustomers() {
            KebapHouse.customers.splice(0, 1);
        }
    }
    KebapHouse.Customer = Customer;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Customer.js.map