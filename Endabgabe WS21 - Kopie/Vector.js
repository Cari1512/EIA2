"use strict";
var KebapHouse;
(function (KebapHouse) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        get length() {
            let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
            return (length);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            let copy = new Vector(this.x, this.y);
            return (copy);
        }
        round() {
            let roundedVector = new Vector(Math.round(this.x), Math.round(this.y));
            return roundedVector;
        }
        compare(_vector) {
            if (Math.round(this.x) == Math.round(_vector.x) && Math.round(this.y) == Math.round(_vector.y)) {
                return true;
            }
            return false;
        }
    }
    KebapHouse.Vector = Vector;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Vector.js.map