namespace GoldenerHerbstClasses {

    //Berge, Wolken von Inverted Classroom
    //Tree insperation von "Learn HTML canvas by coding a JavaScript game | HTML Canvas tutorial for beginners" video https://www.youtube.com/watch?v=Ymbv6m3EuNw&t=618s
    // Eichhörnchen Insperation von Tetik, Asya 
    
    export let crc2: CanvasRenderingContext2D;
    interface Vector {
        x: number;
        y: number;
    }
    let leaves: Leaf[] = [];
    let background: ImageData;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#6d8583");
        gradient.addColorStop(0.2, "#a3a796");
        gradient.addColorStop(0.4, "#573a2a");
        gradient.addColorStop(1, "#f0c499");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        let nLeaves: number = calculateRandom(100, 150);
        for (let i: number = 0; i < nLeaves; i++) {
            let leaf: Leaf = new Leaf;
            leaves.push(leaf);}

       // drawCloud({ x: 1200, y: 100 }, { x: 325, y: 50 });

        drawMountain({ x: 0, y: 300 }, 75, 200, "grey", "white");
        drawMountain({ x: 0, y: 300 }, 50, 150, "grey", "lightgrey");

        drawTrees({ x: 600, y: 450 }, { x: 25, y: -75 }, 50, "#eb8526");
        drawTrees({ x: 500, y: 600 }, { x: 30, y: -90 }, 70, "#eb8526");
        drawTrees({ x: 900, y: 780 }, { x: 40, y: -100 }, 85, "#eb8526");
        drawTrees({ x: 1400, y: 400 }, { x: 15, y: -80 }, 30, "#eb8526");
        drawTrees({ x: 1500, y: 650 }, { x: 25, y: -75 }, 50, "#af4933");
        drawTrees({ x: 1000, y: 500 }, { x: 25, y: -75 }, 50, "#af4933");

        
        

        drawFrameTree({ x: 100, y: -100 }, 0, 200, 250);
        drawFrameTree({ x: 100, y: 150 }, 0, 200, 150);
        drawFrameTree({ x: 100, y: 290 }, 0, 200, 150);
        drawFrameTree({ x: 160, y: 420 }, 0, 200, 180);
        drawFrameTree({ x: 160, y: 550 }, 0, 200, 250);

     

        // drawSquirrel({ x: 500, y: 800});
        // drawSquirrel({ x: 1400, y: 700});
        // drawSquirrel({ x: 970, y: 500});
        window.setInterval(update, 50);

        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        drawSquirrels();
        drawClouds();
        

    }

    export function calculateRandom(_min: number, _max: number): number {
        let random: number = (Math.random() * (_max - _min)) + _min;
        return (random);
    }

    function update(): void {
       crc2.putImageData(background, 0, 0);
        //drawSquirrels();
        drawLeaves();
    }
    function drawLeaves(): void {
        for (let leaf of leaves) {
           //leaf.fall(1 / 50);
            leaf.draw();
        }
    }
    function drawSquirrels(): void {
        let squirrel: Squirrel = new Squirrel;
        
            squirrel.draw();
        
    }
    function drawClouds(): void {
        let cloud: Cloud = new Cloud;
        
            cloud.draw();
        
    }

    function drawMountain(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawTrees(_position: Vector, _size: Vector, _radius: number, _colour: string): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();

        crc2.fillStyle = "#d0b49f";
        crc2.fillRect(0, 0, _size.x, _size.y);


        crc2.fillStyle = _colour;
        drawCircle(0, -100, _radius);
        drawCircle(-20, -120, _radius);
        drawCircle(-10, -140, _radius);
        drawCircle(12.5, -160, _radius);
        drawCircle(25, -100, _radius);
        drawCircle(40, -130, _radius);

        function drawCircle(_x: number, _y: number, _radius: number): void {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            crc2.fill();
        }
        crc2.restore();

    }
    
    function drawFrameTree(_position: Vector, _x: number, _y: number, _radius: number): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();

        crc2.fillStyle = "#af4933";

        crc2.beginPath();
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();

    }
   
    

}