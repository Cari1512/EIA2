"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let Task = document.querySelector("button#Task");
        let Send = document.querySelector("button#Send");
        let Help = document.querySelector("#Help");
        Task.addEventListener("click", newTask);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help);
    }
    function help(_event) {
        alert("Wie funktioniert es: Um eine neue Erledigung hinzuzufügen klicken Sie auf den Button mit der Beschriftung:neue Erledigung. Um innerhalb einer Erledigung eine Aufgabe/ein Produkt hinzuzufügen bitte auf das Plus klicken. Füllen Sie alle aus Fächer aus. Um ein Produkt/Aufgabe zu löschen auf den kleinen Mülleimer drücken. Man kann auch eine ganze Erledigung löschen, indem man neben dem Plus auf dem Mülleimer drückt. Am Ende nicht vergessen auf Abschicken zu clicken!");
    }
    function send(_event) {
        alert("Ihr Auftrag wurde abgeschickt");
    }
    function newTask(_event) {
        let Box = document.createElement("div");
        Box.setAttribute("class", "box");
        let Erledigung = document.createElement("select");
        Erledigung.setAttribute("class", "Erledigung");
        var array = ["Einkaufen", "Haushalt", "Fahrdienst"];
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            Erledigung.appendChild(option);
        }
        ;
        let plus = document.createElement("div");
        plus.setAttribute("class", "addArtikel");
        plus.addEventListener("click", Add);
        Box.appendChild(Erledigung);
        Box.appendChild(plus);
        let column = document.querySelector("form#column1");
        column.appendChild(Box);
    }
    function Add(_event) {
        let selectedTask = document.querySelector(".Erledigung").value;
        console.log(selectedTask);
        switch (selectedTask) {
            case "Einkaufen":
                Einkaufen;
                break;
            case "Haushalt":
                Haushalt;
                console.log("Haushaltfunction");
                break;
            case "Fahrdienst":
                Fahrdienst;
                break;
        }
    }
    ;
    function Einkaufen() {
        console.log("Einkauffunction");
    }
    function Haushalt() {
        console.log("Haushaltfunction");
    }
    function Fahrdienst() {
        console.log("Fahrdienstfunction");
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=Haushaltshilfe.js.map