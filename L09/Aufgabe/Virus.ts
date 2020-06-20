namespace L09_classes{
    export class Virus {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
            
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);

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
           
            let r: number = 30;
        let count: number = 4;
        let particle: Path2D = new Path2D();
        particle.arc(0, 0, r, 0, 2 * Math.PI);


        crc2.save();
       // crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "grey";
        
        
        

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

