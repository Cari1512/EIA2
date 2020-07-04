"use strict";
var L11;
(function (L11) {
    class Particle {
        // _position: Vector
        constructor(_size) {
            // if (_position)
            //     this.position = _position;
            // else
            this.position = new L11.Vector(0, 0);
            this.velocity = new L11.Vector(0, 0);
            this.velocity.set(50, 100);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new L11.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.add(offset);
            if (this.position.y < 0)
                this.position.y = L11.crc2.canvas.height;
            if (this.position.x > L11.crc2.canvas.width)
                this.position.y = L11.crc2.canvas.width;
            if (this.position.y > L11.crc2.canvas.height)
                this.position.y = L11.crc2.canvas.height;
        }
        draw() {
            let r1 = 1;
            let r2 = 5;
            let count = 100;
            let particle = new Path2D();
            let gradient = L11.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#fff5ee");
            gradient.addColorStop(0.5, "#faebd7");
            gradient.addColorStop(0.9, "#faebd7");
            L11.crc2.save();
            L11.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < count; drawn++) {
                L11.crc2.save();
                //  let x: number = (Math.random() - 0.5) * _size.x;
                // let y: number = - (Math.random() * _size.y);
                //crc2.translate(x, y);
                L11.crc2.fill(particle);
                L11.crc2.restore();
            }
            L11.crc2.restore();
        }
    }
    L11.Particle = Particle;
})(L11 || (L11 = {}));
//# sourceMappingURL=Particle.js.map