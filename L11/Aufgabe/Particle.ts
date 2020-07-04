namespace L11 {
    export class Particle {
        position: Vector;
        velocity: Vector;
        size: number;
        // _position: Vector
        constructor(_size: number) {
            // if (_position)
            //     this.position = _position;
            // else
            this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.set(50, 100);

            this.size = _size;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.add(offset);
            if (this.position.y < 0)
                this.position.y = crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.y = crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y = crc2.canvas.height;
        }

        draw(): void {

            let r1: number = 1;
                let r2: number = 5;
                let count: number = 100;
                let particle: Path2D = new Path2D();
                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
                particle.arc(0, 0, r2, 0, 2 * Math.PI);
                gradient.addColorStop(0, "#fff5ee");
                gradient.addColorStop(0.5, "#faebd7"); 
                gradient.addColorStop(0.9, "#faebd7");
                
                
         
        
        
                crc2.save();
                
                crc2.fillStyle = gradient;



            for (let drawn: number = 0; drawn < count; drawn++) {
                crc2.save();
                //  let x: number = (Math.random() - 0.5) * _size.x;
                // let y: number = - (Math.random() * _size.y);
                //crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();

        }
    }

}

