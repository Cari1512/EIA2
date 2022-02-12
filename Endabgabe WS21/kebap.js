"use strict";
var KebapHouse;
(function (KebapHouse) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let startDiv;
    let start;
    let customers = [];
    let customerNumber;
    let breakFrequency;
    function hndLoad() {
        start = document.querySelector("#startButton");
        start.addEventListener("click", hndStart);
    }
    function hndStart(_event) {
        let customerNumberElement = document.getElementById("customernumber");
        customerNumber = parseInt(customerNumberElement.value);
        let breakFrequencyElement = document.getElementById("frequency");
        breakFrequency = parseInt(breakFrequencyElement.value);
        console.log(breakFrequency, customerNumber);
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
        canvas.width = 874;
        canvas.height = 700;
        KebapHouse.crc2 = canvas.getContext("2d");
        startDiv.appendChild(canvas);
        startGame();
    }
    function startGame() {
        customers.push(new KebapHouse.Customer(new KebapHouse.Vector(400, 350)));
        customers.push(new KebapHouse.Customer(new KebapHouse.Vector(450, 400)));
        customers.push(new KebapHouse.Customer(new KebapHouse.Vector(300, 500)));
        update();
    }
    function update() {
        let lastFrame = performance.now();
        let frameTime = performance.now() - lastFrame;
        for (let person of customers) {
            person.draw();
            person.move(frameTime / 1000);
        }
        window.requestAnimationFrame(update);
    }
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=kebap.js.map