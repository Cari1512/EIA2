"use strict";
var KebapHouse;
(function (KebapHouse) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let startDiv;
    let start;
    let customers = [];
    function hndLoad() {
        start = document.querySelector("#startButton");
        start.addEventListener("click", hndStart);
    }
    function hndStart(_event) {
        startDiv = document.querySelector("#overlay");
        startDiv.innerHTML = "";
        startDiv.classList.remove("overlayStyle");
        startDiv.classList.add("content");
        hndLayout();
    }
    function hndLayout() {
        let headline = document.createElement("p");
        headline.innerHTML = "Kebap House";
        startDiv.appendChild(headline);
        let canvas = document.createElement("canvas");
        KebapHouse.crc2 = canvas.getContext("2d");
        startDiv.appendChild(canvas);
        startGame();
    }
    function startGame() {
        update();
        customers.push(new KebapHouse.Customer(new KebapHouse.Vector(400, 400)));
        customers.push(new KebapHouse.Customer(new KebapHouse.Vector(450, 400)));
        customers.push(new KebapHouse.Customer(new KebapHouse.Vector(300, 400)));
        customers[0].draw();
        console.log(customers);
    }
    function update() {
        window.requestAnimationFrame(update);
    }
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=kebap.js.map