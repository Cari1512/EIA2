"use strict";
var L11;
(function (L11) {
    class Cell {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11.Vector(0, 0);
            this.velocity = new L11.Vector(0, 0);
        }
        draw() {
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    L11.Cell = Cell;
})(L11 || (L11 = {}));
//# sourceMappingURL=Cell.js.map