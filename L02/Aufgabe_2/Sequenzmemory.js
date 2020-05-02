"use strict";
var Sequenzmemory;
(function (Sequenzmemory) {
    //Variablen global
    let Sequenz = [];
    let Cards = [];
    let counter;
    //let index:number= 0
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let input = document.querySelector("div#input");
        input.addEventListener("change", inputUser);
    }
    function inputUser(_event) {
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            console.log(entry);
            switch (entry[0]) {
                case "Sequence":
                //Noch nicht funktionsfähig!
                case "Sequenz":
                    Sequenz = [];
                    let value = entry[1];
                    let solution = document.querySelector("#solution");
                    solution.innerHTML = value;
                    let letters = value.split("");
                    Sequenz.push(letters);
                    DisplayCards();
                    break;
                case "chances":
                    counter = entry[1];
                    let Versuche = document.querySelector("#counter");
                    Versuche.innerHTML = counter;
            }
        }
    }
    function DisplayCards() {
        Cards = [];
        Cards = Sequenz;
        let arraylength = Cards.length;
        for (let i = 0; i < arraylength; i++) {
            let x = Math.floor(Math.random() * (arraylength - 1));
            let tempi = Cards[i];
            let tempx = Cards[x];
            Cards[i] = tempx;
            Cards[x] = tempi;
        }
        for (let i = 0; i < Cards.length; i++) {
            let Card = document.createElement("span");
            Card.setAttribute("class", "Card");
            Card.textContent = Cards[i];
            let playground = document.querySelector("#playground");
            playground.appendChild(Card);
        }
    }
})(Sequenzmemory || (Sequenzmemory = {}));
//# sourceMappingURL=Sequenzmemory.js.map