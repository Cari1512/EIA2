"use strict";
var GoldenerHerbstClasses;
(function (GoldenerHerbstClasses) {
    class Leaf {
        constructor() {
            this.position = new GoldenerHerbstClasses.Vector(GoldenerHerbstClasses.calculateRandom(0, GoldenerHerbstClasses.crc2.canvas.width), 0);
            this.velocity = new GoldenerHerbstClasses.Vector(0, 0);
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);
            this.type = Math.round(GoldenerHerbstClasses.calculateRandom(1, 3));
            this.scale = new GoldenerHerbstClasses.Vector(GoldenerHerbstClasses.calculateRandom(1, 2), GoldenerHerbstClasses.calculateRandom(1, 2));
            this.rotation = GoldenerHerbstClasses.calculateRandom(0, 360);
            this.rotationSpeed = GoldenerHerbstClasses.calculateRandom(-10, 10);
            this.color = "#af4933";
        }
        draw() {
            GoldenerHerbstClasses.crc2.save();
            GoldenerHerbstClasses.crc2.translate(this.position.x, this.position.y);
            GoldenerHerbstClasses.crc2.scale(this.scale.x, this.scale.y);
            GoldenerHerbstClasses.crc2.rotate(this.rotation);
            GoldenerHerbstClasses.drawLeaf(this.color);
            GoldenerHerbstClasses.crc2.restore();
        }
    }
    GoldenerHerbstClasses.Leaf = Leaf;
})(GoldenerHerbstClasses || (GoldenerHerbstClasses = {}));
//# sourceMappingURL=Leaf.js.map