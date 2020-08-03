namespace Endabgabe {
    export class Line extends Object {
        constructor(_position: Vector, _positionB: Vector) {
            super(_position, _positionB);
        }
        public draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.position.x,this.position.y);
            crc2.lineTo(this.positionB.x, this.positionB.y);
            crc2.stroke();

            crc2.moveTo(this.position.x, this.position.y);
            crc2.arc(this.position.x, this.position.y, 3, 0, 2 * Math.PI);
            crc2.stroke();

            crc2.moveTo(this.positionB.x, this.positionB.y);
            crc2.arc(this.positionB.x, this.positionB.y, 3, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#FF0000"
        }

    }
}