"use strict";
var KebapHouse;
(function (KebapHouse) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let startDiv;
    let start;
    function hndLoad() {
        start = document.querySelector("#startButton");
        start.addEventListener("pointerdown", hndStart);
    }
    function hndStart(_event) {
        startDiv = document.querySelector("#overlay");
        startDiv.innerHTML = "";
        startDiv.classList.remove("overlayStyle");
        startDiv.classList.add("content");
        hndlayout();
    }
    function hndlayout() {
        let headline = document.createElement("p");
        headline.innerHTML = "Kebap House";
        startDiv.appendChild(headline);
        let canvas = document.createElement("canvas");
        KebapHouse.crc2 = canvas.getContext("2d");
        startDiv.appendChild(canvas);
    }
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=kebap.js.map