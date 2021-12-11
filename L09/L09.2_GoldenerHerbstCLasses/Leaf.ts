namespace GoldenerHerbstClasses {
    export class Leaf {
        position: Vector;
        velocity: Vector;
        type: number;
        scale: Vector;
        rotation: number;
        rotationSpeed: number;
        color: string;

        constructor() {
            this.position = new Vector(calculateRandom(0, crc2.canvas.width), 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);

            this.type = Math.round(calculateRandom(1, 3));
            this.scale = new Vector(calculateRandom(1, 2), calculateRandom(1, 2));
            this.rotation = calculateRandom(0, 360);
            this.rotationSpeed = calculateRandom(-10, 10);

            this.color = "#af4933";
            
        }

     
        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);
            crc2.rotate(this.rotation);
            drawLeaf( this.color);
            crc2.restore();
        }
    }
}