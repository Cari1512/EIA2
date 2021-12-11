namespace GoldenerHerbstClasses{



    export class Cloud{
        position: Vector;
        velocity: Vector;
        scale: Vector;
        color: string;


        constructor() {
            this.position = new Vector(calculateRandom(0, crc2.canvas.width), 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 400, Math.PI / 8, Math.PI / 3);

            this.scale = new Vector(calculateRandom(1, 2), calculateRandom(1, 2));

            this.color = "#af4933";
            
        }

        draw(): void {
            
                
        
                let nParticles: number = 80;
                let radiusParticle: number = 50;
                let particle: Path2D = new Path2D();
                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        
                particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
                gradient.addColorStop(0, "HSLA(132, 6%, 83%, 0.5)");
                gradient.addColorStop(1, "HSLA(132, 6%, 83%, 0)");
        
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.fillStyle = gradient;
        
                for (let drawn: number = 0; drawn < nParticles; drawn++) {
                    crc2.save();
                    let x: number = (Math.random() - 0.5) * this.scale.x;
                    let y: number = - (Math.random() * this.scale.y);
                    crc2.translate(x, y);
                    crc2.fill(particle);
                    crc2.restore();
                }
                crc2.restore();
            
        }
    }
}