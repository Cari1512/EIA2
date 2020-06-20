"use strict";
var L09_test;
(function (L09_test) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
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
    }
    let v1 = new Vector(10, -3);
    v1.scale(2);
    console.log(v1);
})(L09_test || (L09_test = {}));
//# sourceMappingURL=test.js.map