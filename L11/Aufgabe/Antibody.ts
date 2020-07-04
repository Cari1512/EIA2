namespace L11{
    export class Antibody{
        position: Vector;
        velocity: Vector;
        size: number;
        
        constructor(_size: number) {
            
            this.position = new Vector(0, 0);

            
            this.velocity = Vector.getRandom(50, 100);

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
        draw(): void{
        let particle: Path2D = new Path2D();
        let count: number = 3;

        crc2.save();
        crc2.translate(this.position.y, this.position.x);
        crc2.beginPath();
        crc2.rotate(Math.random() * 360);
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 24);
        crc2.strokeStyle = "#363b74"
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(0, 36, 12, 0, 1 * Math.PI, true);
        crc2.stroke();
        
        for (let drawn: number = 0; drawn < count; drawn++) {
            crc2.save();
            // let x: number = (Math.random() - 0.5) * this.size;
            // let y: number = - (Math.random() * this.size);
            // crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
        }
    }
}