"use strict";
var L11;
(function (L11) {
    class Virus extends L11.Cell {
        // _position: Vector
        constructor(_position) {
            // if (_position)
            //     this.position = _position;
            // else
            super(_position);
            this.position = new L11.Vector(0, 0);
            this.velocity = L11.Vector.getRandom(50, 100);
            this.size = 3;
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
            let r = 30;
            let count = 4;
            let particle = new Path2D();
            particle.arc(0, 0, r, 0, 2 * Math.PI);
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.fillStyle = "grey";
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
    L11.Virus = Virus;
})(L11 || (L11 = {}));
//# sourceMappingURL=Virus.js.map