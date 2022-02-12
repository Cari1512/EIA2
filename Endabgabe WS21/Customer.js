"use strict";
var KebapHouse;
(function (KebapHouse) {
    class Customer extends KebapHouse.Human {
        constructor(_position) {
            super(_position);
        }
        draw() {
            KebapHouse.crc2.save();
            KebapHouse.crc2.beginPath();
            KebapHouse.crc2.arc(this.position.x, this.position.y, 30, 0, 360);
            console.log(this.position.x, this.position.y);
            KebapHouse.crc2.stroke();
            KebapHouse.crc2.fill();
            KebapHouse.crc2.restore();
        }
    }
    KebapHouse.Customer = Customer;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Customer.js.map