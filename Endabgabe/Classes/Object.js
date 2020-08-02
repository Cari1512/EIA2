"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Object {
        constructor(_position, _positionB) {
            this.velocity = new Endabgabe.Vector(5, 5);
            this.position = _position.copy();
            this.positionB = _positionB.copy();
        }
        move() {
            let offset = this.velocity.copy();
            offset.scale(3);
            this.position.add(offset);
        }
    }
    Endabgabe.Object = Object;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Object.js.map