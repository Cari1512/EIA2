"use strict";
var L09_classes;
(function (L09_classes) {
    class Virus {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_classes.Vector(0, 0);
            this.velocity = new L09_classes.Vector(0, 0);
            this.velocity.random(50, 100);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new L09_classes.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.add(offset);
            if (this.position.y < 0)
                this.position.y = L09_classes.crc2.canvas.height;
            if (this.position.x > L09_classes.crc2.canvas.width)
                this.position.y = L09_classes.crc2.canvas.width;
            if (this.position.y > L09_classes.crc2.canvas.height)
                this.position.y = L09_classes.crc2.canvas.height;
        }
        draw() {
            let r = 30;
            let count = 4;
            let particle = new Path2D();
            particle.arc(0, 0, r, 0, 2 * Math.PI);
            L09_classes.crc2.save();
            // crc2.translate(_position.x, _position.y);
            L09_classes.crc2.fillStyle = "grey";
            for (let drawn = 0; drawn < count; drawn++) {
                L09_classes.crc2.save();
                //  let x: number = (Math.random() - 0.5) * _size.x;
                // let y: number = - (Math.random() * _size.y);
                //crc2.translate(x, y);
                L09_classes.crc2.fill(particle);
                L09_classes.crc2.restore();
            }
            L09_classes.crc2.restore();
        }
    }
    L09_classes.Virus = Virus;
})(L09_classes || (L09_classes = {}));
//# sourceMappingURL=Virus.js.map