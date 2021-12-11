"use strict";
var GoldenerHerbstClasses;
(function (GoldenerHerbstClasses) {
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
        copy() {
            let copy = new Vector(this.x, this.y);
            return (copy);
        }
        random(_minLength, _maxLength, _minAngle = 0, _maxAngle = 2 * Math.PI) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = GoldenerHerbstClasses.calculateRandom(_minAngle, _maxAngle);
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    GoldenerHerbstClasses.Vector = Vector;
})(GoldenerHerbstClasses || (GoldenerHerbstClasses = {}));
//# sourceMappingURL=Vector.js.map