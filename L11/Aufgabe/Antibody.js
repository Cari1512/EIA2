"use strict";
var L11;
(function (L11) {
    class Antibody {
        constructor(_size) {
            this.position = new L11.Vector(0, 0);
            this.velocity = L11.Vector.getRandom(50, 100);
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
            let particle = new Path2D();
            let count = 3;
            L11.crc2.save();
            L11.crc2.translate(this.position.y, this.position.x);
            L11.crc2.beginPath();
            L11.crc2.rotate(Math.random() * 360);
            L11.crc2.moveTo(0, 0);
            L11.crc2.lineTo(0, 24);
            L11.crc2.strokeStyle = "#363b74";
            L11.crc2.lineWidth = 3;
            L11.crc2.stroke();
            L11.crc2.closePath();
            L11.crc2.beginPath();
            L11.crc2.arc(0, 36, 12, 0, 1 * Math.PI, true);
            L11.crc2.stroke();
            for (let drawn = 0; drawn < count; drawn++) {
                L11.crc2.save();
                // let x: number = (Math.random() - 0.5) * this.size;
                // let y: number = - (Math.random() * this.size);
                // crc2.translate(x, y);
                L11.crc2.fill(particle);
                L11.crc2.restore();
            }
            L11.crc2.restore();
        }
    }
    L11.Antibody = Antibody;
})(L11 || (L11 = {}));
//# sourceMappingURL=Antibody.js.map