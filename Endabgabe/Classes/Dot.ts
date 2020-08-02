namespace Endabgabe {
    export class Dot extends Object {
        constructor(_position: Vector, _positionB: Vector) {
            super(_position, _positionB);
        }
        public draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.arc(this.position.x, this.position.y, 3, 0, 2 * Math.PI);
            crc2.stroke();
            
            
        }

    }
}