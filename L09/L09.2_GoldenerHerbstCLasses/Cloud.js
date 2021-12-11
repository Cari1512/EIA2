"use strict";
var GoldenerHerbstClasses;
(function (GoldenerHerbstClasses) {
    class Cloud {
        constructor() {
            this.position = new GoldenerHerbstClasses.Vector(GoldenerHerbstClasses.calculateRandom(0, GoldenerHerbstClasses.crc2.canvas.width), 0);
            this.velocity = new GoldenerHerbstClasses.Vector(0, 0);
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);
            this.scale = new GoldenerHerbstClasses.Vector(GoldenerHerbstClasses.calculateRandom(1, 2), GoldenerHerbstClasses.calculateRandom(1, 2));
            this.color = "#af4933";
        }
        draw() {
            let nParticles = 80;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = GoldenerHerbstClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(132, 6%, 83%, 0.5)");
            gradient.addColorStop(1, "HSLA(132, 6%, 83%, 0)");
            GoldenerHerbstClasses.crc2.save();
            GoldenerHerbstClasses.crc2.translate(this.position.x, this.position.y);
            GoldenerHerbstClasses.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                GoldenerHerbstClasses.crc2.save();
                let x = (Math.random() - 0.5) * this.scale.x;
                let y = -(Math.random() * this.scale.y);
                GoldenerHerbstClasses.crc2.translate(x, y);
                GoldenerHerbstClasses.crc2.fill(particle);
                GoldenerHerbstClasses.crc2.restore();
            }
            GoldenerHerbstClasses.crc2.restore();
        }
    }
    GoldenerHerbstClasses.Cloud = Cloud;
})(GoldenerHerbstClasses || (GoldenerHerbstClasses = {}));
//# sourceMappingURL=Cloud.js.map