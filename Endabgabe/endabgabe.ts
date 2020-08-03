namespace Endabgabe {
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let objects: Object[] = [];
    let dots: Dot[] = [];
    let positions: Vector[] = [];
    let mode: string;
    let modeActive: boolean = false;
    let canvasColor: HTMLInputElement= <HTMLInputElement>document.getElementById("colorPickerCanvas");
    let buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
    window.addEventListener("load", handleLoad);


    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvasColor = <HTMLInputElement>document.getElementById("colorPickerCanvas");
        let Line: HTMLButtonElement = <HTMLButtonElement>document.getElementById("lineObject");
        // let Triangle : HTMLButtonElement = <HTMLButtonElement>document.getElementById("triangleObject");
        // let Square : HTMLButtonElement = <HTMLButtonElement>document.getElementById("squareObject");
        // let Circle : HTMLButtonElement = <HTMLButtonElement>document.getElementById("circleObject");
        // let Arc : HTMLButtonElement = <HTMLButtonElement>document.getElementById("arcObject");
        



        Line.addEventListener("click", function () { objectMode("lineObject") })
        canvas.addEventListener("click", handleClick)
        canvasColor.addEventListener("change", colorProject)
    }
    function colorProject(): void {
        canvas.style.backgroundColor =canvasColor.value;
        console.log(canvasColor.value);
    }
    function objectMode(_mode: string): void {
        let chosenObject: HTMLButtonElement = <HTMLButtonElement>document.getElementById(_mode);
        modeActive = true
        mode= _mode;
        console.log(modeActive, _mode);


        for (let i: number = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }

        chosenObject.classList.add("active");
    }

    function handleClick(_event: MouseEvent): void {
        // let clear: boolean;
        // clear = true;

        if (modeActive) {
            let x: number = _event.clientX;
            let y: number = _event.clientY;

            let Vec: Vector = new Vector(x, y);
            let Zero: Vector = new Vector(0, 0);

            positions.push(Vec);

            let dot: Dot = new Dot(Vec, Zero)
            dots.push(dot);
            
            drawDots();

            

            if(dots.length >1){
                switch (mode) {

                    case "lineObject": {
                        console.log("Mode: Line");
                        dots = [];
                        drawLine();
                        break;
                    }
            }
        }
    }
    }
    function drawDots(): void {
        for (let i: number = 0; i < dots.length; i++) {
            dots[i].draw();
            console.log(dots);
        }
    }
    function drawLine(): void {
        let line: Line = new Line(positions[0], positions[1])
        objects.push(line);
        console.log("drawLine with coordinates:", positions);
        line.draw();
         positions = [];
    }


    // function drawObjects(): void {
        
    //     crc2.clearRect(0, 0, 1280, 620);

        
    //     for (let i: number = 0; i < objects.length; i++) {
    //         objects[i].draw();
    //     }
        
    //     positions = [];
    // }




}