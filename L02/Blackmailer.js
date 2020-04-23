"use strict";
var L02_Blackmailer;
(function (L02_Blackmailer) {
    console.log("HI");
    let chosenCharacter = "A";
    let chosenCharacters = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        mail.addEventListener("click", targetStudy);
        mail.addEventListener("pointerdown", targetStudys); // bisher separat von click even, wegen aufgeteilten functions
        document.addEventListener("keydown", chooseCharacter);
        let alphabet = document.querySelector("div#selection");
        alphabet.addEventListener("pointerdown", chooseAlphabet);
    }
    // Lösungsweg 3
    function targetStudy(_event) {
        let mail = document.querySelector("div#mail");
        if (_event.target == mail) {
            placeLetter(_event);
        }
        else {
            deleteLetter(_event);
        }
    }
    function targetStudys(_event) {
        let mail = document.querySelector("div#mail");
        if (_event.target == mail) {
            placeLetters(_event);
        }
        else {
            deleteLetter(_event);
        }
    }
    function placeLetter(_event) {
        // console.log(_event);
        //_event.stopPropagation();  Lösungsweg 1
        //if (_event.target== _event.currentTarget) {  Lösungsweg 2
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
        letter.setAttribute("id", "letter");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        //letter.addEventListener("click", deleteLetter); //}
    }
    function placeLetters(_event) {
        // console.log(_event);
        //_event.stopPropagation();  Lösungsweg 1
        //if (_event.target== _event.currentTarget) {  Lösungsweg 2
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
        letter.setAttribute("id", "letter");
        mail.appendChild(letter);
        letter.textContent = chosenCharacters;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        //letter.addEventListener("click", deleteLetter); //}
    }
    function chooseAlphabet(_event) {
        //let target:Node = <Node> _event.target;
        //chosenCharacters =  target.textContent;
        console.log(chosenCharacters);
    }
    function chooseCharacter(_event) {
        // console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_Blackmailer || (L02_Blackmailer = {}));
//Problem: wie setzte ich auf eine function mehrere Eventarten drauf?
//# sourceMappingURL=Blackmailer.js.map