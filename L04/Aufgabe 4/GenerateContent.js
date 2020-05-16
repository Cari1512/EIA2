"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    function newTask(_event, _data) {
        let Box = document.createElement("div");
        Box.setAttribute("class", "box");
        let Erledigung = document.createElement("select");
        Erledigung.setAttribute("class", "Erledigung");
        //var array = ["Einkaufen", "Haushalt", "Fahrdienst"];
        for (let task in _data) {
            var option = document.createElement("option");
            option.value = task;
            option.text = task;
            Erledigung.appendChild(option);
        }
        ;
        let plus = document.createElement("div");
        plus.setAttribute("class", "addArtikel");
        // plus.innerHTML = "+";
        // plus.addEventListener("click", Add);
        let d_Trash = document.createElement("i");
        // d_Trash.setAttribute("class", "far fa-trash-alt");
        // d_Trash.addEventListener("click", deleteBox);
        Box.appendChild(Erledigung);
        Box.appendChild(plus);
        Box.appendChild(d_Trash);
        let column = document.querySelector("form#column1");
        column.appendChild(Box);
    }
    Haushaltshilfe.newTask = newTask;
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=GenerateContent.js.map