namespace L08_1_GenerativeKunst {
    

    let crc2: CanvasRenderingContext2D;
    let x: number;
    let y: number;
    //let radius: number;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0,0, 500);

        gradient.addColorStop(0, "#001845");
        gradient.addColorStop(.5, "#023e7d");
        gradient.addColorStop(1, "#284E68");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        
         

        
        circle();
        lines();
        triangle();
        
        
    }


    function circle(): void {
        for (let i: number = 0; i < 50; i++) {

            let colours = [
                "#e0c3fc",
                "#bbadff",
                "#80ffdb",
                "#Be7e9f6",
            ];


            crc2.beginPath();
            crc2.arc(Math.floor( Math.random() * innerWidth), Math.floor(Math.random() * 500), Math.floor(Math.random() * (30) + 2), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            
            var rand = Math.floor(Math.random()*colours.length);
            var rValue = colours[rand];
            crc2.fillStyle = rValue;

            crc2.globalAlpha= Math.floor(Math.random() * 0.8) + 0.2;
            crc2.fill();
        }
}


function lines():void{

    for (let i: number = 0; i < 20; i++) {
    x = Math.random() * innerWidth;
    y = Math.random() * innerHeight;

    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineTo(y, x);
    crc2.lineWidth = 1.5;
    crc2.stroke();
    }
}

function triangle(): void{
    for (let i: number = 0; i < 20; i++) {
    
    x = Math.random() * innerWidth -200;
    y = window.innerHeight;

    crc2.beginPath();
        crc2.moveTo(x, y);
        let m: number = Math.floor(Math.random() * 300) + 200;
        crc2.lineTo(x+m*2, y);
        crc2.lineTo(x + m, y - m);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.lineWidth = 2;
        crc2.globalAlpha = 0.8;
        crc2.stroke();
        crc2.fill();
    }
        
}

}