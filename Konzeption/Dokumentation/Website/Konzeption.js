"use strict";
var ourLostTrees;
(function (ourLostTrees) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let startDiv;
    function hndLoad() {
        startDiv = document.querySelector("#overlay");
        startDiv.addEventListener("pointerdown", hndStart);
    }
    function hndStart(_event) {
        startDiv = document.querySelector("#overlay");
        startDiv.innerHTML = "";
        startDiv.classList.remove("overlayStyle");
        //startDiv.classList.add("content");
        hndlayout();
    }
    function hndlayout() {
        let headline = document.createElement("p");
        headline.innerHTML = "Our Lost Trees";
        startDiv.appendChild(headline);
    }
})(ourLostTrees || (ourLostTrees = {}));
//# sourceMappingURL=Konzeption.js.map