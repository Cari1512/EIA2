namespace GoldenerHerbstClasses {

    export class Squirrel {
        position: Vector;
        size: number;

        constructor() {
            this.position = new Vector(500,700)
            

            
        }
        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            
            drawSquirrel();
            crc2.restore();
        }

    }

}