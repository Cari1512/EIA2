"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Dot extends Endabgabe.Object {
        constructor(_position, _positionB) {
            super(_position, _positionB);
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.position.x, this.position.y);
            Endabgabe.crc2.arc(this.position.x, this.position.y, 3, 0, 2 * Math.PI);
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.Dot = Dot;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Dot.js.map