var L02_Blackmailer;
(function (L02_Blackmailer) {
    console.log("HI");
    var chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var mail = document.querySelector("div#mail");
        mail.addEventListener("click", targetStudy);
        mail.addEventListener("pointerdown", targetStudys);
        document.addEventListener("keydown", chooseCharacter);
        var alphabet = document.querySelector("div#selection");
        alphabet.addEventListener("pointerdown", chooseAlphabet);
    }
    // Lösungsweg 3
    function targetStudy(_event) {
        var mail = document.querySelector("div#mail");
        if (_event.target == mail) {
            placeLetter(_event);
        }
        else {
            deleteLetter(_event);
        }
    }
    function targetStudys(_event) {
        var mail = document.querySelector("div#mail");
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
        var x = _event.offsetX;
        var y = _event.offsetY;
        var mail = _event.target;
        var letter = document.createElement("span");
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
        var x = _event.offsetX;
        var y = _event.offsetY;
        var mail = _event.target;
        var letter = document.createElement("span");
        letter.setAttribute("id", "letter");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        //letter.addEventListener("click", deleteLetter); //}
    }
    function chooseAlphabet(_event) {
        var target = _event.target;
        var chosenCharacter = target.textContent;
        console.log(chosenCharacter);
    }
    function chooseCharacter(_event) {
        // console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        var target = _event.target;
        var parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_Blackmailer || (L02_Blackmailer = {}));
//# sourceMappingURL=Blackmailer.js.map