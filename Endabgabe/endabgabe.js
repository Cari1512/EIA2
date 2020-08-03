"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.objects = [];
    let dots = [];
    let positions = [];
    let mode;
    let modeActive = false;
    let canvasColor = document.getElementById("colorPickerCanvas");
    let buttons = document.querySelectorAll("button");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        Endabgabe.canvas = document.querySelector("canvas");
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        canvasColor = document.getElementById("colorPickerCanvas");
        let Line = document.getElementById("lineObject");
        // let Triangle : HTMLButtonElement = <HTMLButtonElement>document.getElementById("triangleObject");
        // let Square : HTMLButtonElement = <HTMLButtonElement>document.getElementById("squareObject");
        // let Circle : HTMLButtonElement = <HTMLButtonElement>document.getElementById("circleObject");
        // let Arc : HTMLButtonElement = <HTMLButtonElement>document.getElementById("arcObject");
        Line.addEventListener("click", function () { objectMode("lineObject"); });
        Endabgabe.canvas.addEventListener("click", handleClick);
        canvasColor.addEventListener("change", colorProject);
    }
    function colorProject() {
        Endabgabe.canvas.style.backgroundColor = canvasColor.value;
        console.log(canvasColor.value);
    }
    function objectMode(_mode) {
        let chosenObject = document.getElementById(_mode);
        modeActive = true;
        mode = _mode;
        console.log(modeActive, _mode);
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        chosenObject.classList.add("active");
    }
    function handleClick(_event) {
        // let clear: boolean;
        // clear = true;
        if (modeActive) {
            let x = _event.clientX;
            let y = _event.clientY;
            let Vec = new Endabgabe.Vector(x, y);
            let Zero = new Endabgabe.Vector(0, 0);
            positions.push(Vec);
            let dot = new Endabgabe.Dot(Vec, Zero);
            dots.push(dot);
            drawDots();
            if (dots.length > 1) {
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
    function drawDots() {
        for (let i = 0; i < dots.length; i++) {
            dots[i].draw();
            console.log(dots);
        }
    }
    function drawLine() {
        let line = new Endabgabe.Line(positions[0], positions[1]);
        Endabgabe.objects.push(line);
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
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=endabgabe.js.map