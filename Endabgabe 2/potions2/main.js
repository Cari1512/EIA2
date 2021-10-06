"use strict";
var Firework;
(function (Firework) {
    let canvas;
    let crc2;
    //let rockets: Rocket[]; 
    let rocketSizes;
    let addNew;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        canvas = document.getElementById("canvas");
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", fireRocket);
        canvas.width = 500;
        canvas.height = 500;
        rocketSizes = document.querySelector(".rocketWrapper");
        rocketSizes.addEventListener("click", rocketSize);
        addNew = document.getElementById("addRocket");
        addNew.addEventListener("click", addRocket);
        Firework.createElements();
        createBackground();
    }
    function selectColor(_event) {
        let target = _event.target;
        if (target) {
            let allPotions = document.querySelectorAll(".potion");
            for (let potion of allPotions) {
                if (potion.classList.contains("active")) {
                    potion.classList.remove("active");
                }
            }
            target.classList.add("active");
            console.log(allPotions, target);
        }
    }
    Firework.selectColor = selectColor;
    function fireRocket() {
        //Let the Rocket explode
    }
    function rocketSize() {
        //change Size of Rocket
    }
    function addRocket() {
        // Add new Rocket
    }
    function createBackground() {
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map