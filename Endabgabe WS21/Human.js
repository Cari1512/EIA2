"use strict";
var KebapHouse;
(function (KebapHouse) {
    class Human {
        constructor(_position) {
            this.position = _position;
            this.velocity = new KebapHouse.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    KebapHouse.Human = Human;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Human.js.map