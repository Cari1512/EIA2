"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.objects = [];
    let positions = [];
    let modeActive = false;
    let buttons = document.querySelectorAll("button");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        Endabgabe.canvas = document.querySelector("canvas");
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        let Line = document.getElementById("lineObject");
        // let Triangle : HTMLButtonElement = <HTMLButtonElement>document.getElementById("triangleObject");
        // let Square : HTMLButtonElement = <HTMLButtonElement>document.getElementById("squareObject");
        // let Circle : HTMLButtonElement = <HTMLButtonElement>document.getElementById("circleObject");
        // let Arc : HTMLButtonElement = <HTMLButtonElement>document.getElementById("arcObject");
        Line.addEventListener("click", function () { objectMode("lineObject"); });
        Endabgabe.canvas.addEventListener("click", handleClick);
    }
    function objectMode(_mode) {
        let chosenObject = document.getElementById(_mode);
        modeActive = true;
        console.log(modeActive, _mode);
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        chosenObject.classList.add("active");
    }
    function handleClick(_event) {
        if (modeActive) {
            let x = _event.clientX;
            let y = _event.clientY;
            let Vec = new Endabgabe.Vector(x, y);
            let Zero = new Endabgabe.Vector(0, 0);
            positions.push(Vec);
            let dot = new Endabgabe.Dot(Vec, Zero);
            Endabgabe.objects.push(dot);
            dot.draw();
            console.log(Endabgabe.objects);
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=endabgabe.js.map