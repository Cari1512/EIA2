namespace GoldenerHerbstClasses {

    export function drawLeaf(_color: string) {



        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let leaves = new Path2D();
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        crc2.moveTo(0, 0);
        leaves.arc(x, y, 30, 500, 50 * Math.PI);
        crc2.fillStyle = "#af4933";
        crc2.rotate(Math.random() * 360);
        crc2.fill(leaves);

    }
    export function drawSquirrel() {
        crc2.resetTransform();
        crc2.save();
        //crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#9a7847";
        //tail
        crc2.save();
        crc2.beginPath();
        crc2.ellipse(-15, -30, 15, 25, 3, 10, 20);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
        //body
        crc2.beginPath();
        crc2.ellipse(5, -20, 10, 25, 10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //arm
        crc2.beginPath();
        crc2.ellipse(20, -20, 3, 6, 2, 10, 20);
        crc2.closePath();
        crc2.fill();

        //leg
        crc2.beginPath();
        crc2.ellipse(-4, -1, 4.5, 18, 1.7, 20, 40);
        crc2.closePath();
        crc2.fill();
        //head
        crc2.beginPath();
        crc2.ellipse(17, -40, 8, 10, 2, 20, 40);
        crc2.closePath();
        crc2.fill();

        //eye
        var rEye = 2;
        crc2.fillStyle = "#000000"; //ohr wird auch schwarz
        crc2.beginPath();
        crc2.arc(20, -40, rEye, 0, 2 * Math.PI);
        crc2.lineWidth = 1;
        crc2.closePath();
        crc2.fill();
        //ear
        crc2.fillStyle = "#9a7847";
        crc2.beginPath();
        crc2.moveTo(10, -45);
        crc2.lineTo(15, -60);
        crc2.lineTo(13, -40);
        crc2.closePath();
        crc2.fill();

    }
     



}