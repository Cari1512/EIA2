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
        mainsite();
    }
    function mainsite() {
        startDiv = document.querySelector("#overlay");
        startDiv.classList.add("newStyle");
    }
})(ourLostTrees || (ourLostTrees = {}));
//# sourceMappingURL=Konzeption.js.map