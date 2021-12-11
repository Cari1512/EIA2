"use strict";
var GoldenerHerbstClasses;
(function (GoldenerHerbstClasses) {
    class Squirrel {
        constructor() {
            this.position = new GoldenerHerbstClasses.Vector(500, 700);
        }
        draw() {
            GoldenerHerbstClasses.crc2.save();
            GoldenerHerbstClasses.crc2.translate(this.position.x, this.position.y);
            GoldenerHerbstClasses.drawSquirrel();
            GoldenerHerbstClasses.crc2.restore();
        }
    }
    GoldenerHerbstClasses.Squirrel = Squirrel;
})(GoldenerHerbstClasses || (GoldenerHerbstClasses = {}));
//# sourceMappingURL=Squirrel.js.map