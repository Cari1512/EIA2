namespace Endabgabe {
    export class Dot extends Object {
        constructor(_position: Vector, _positionB: Vector) {
            super(_position, _positionB);
        }
        public draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.strokeStyle = "#FF0000";
            crc2.closePath();
           
            
            
        }

    }
}