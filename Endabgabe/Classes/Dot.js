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
            Endabgabe.crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.strokeStyle = "#FF0000";
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Dot = Dot;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Dot.js.map