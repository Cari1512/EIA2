"use strict";
var L05;
(function (L05) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let Send = document.querySelector("button#Send");
        let Help = document.querySelector("#Help");
        L05.generateContent(L05.data);
        L05.generateDetail(L05.detail);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help);
    }
    function help(_event) {
        alert("Wie funktioniert es: Um eine neue Erledigung hinzuzufügen klicken Sie auf den Button mit der Beschriftung:neue Erledigung. Um innerhalb einer Erledigung eine Aufgabe/ein Produkt hinzuzufügen bitte auf das Plus klicken. Füllen Sie alle aus Fächer aus. Um ein Produkt/Aufgabe zu löschen auf den kleinen Mülleimer drücken. Man kann auch eine ganze Erledigung löschen, indem man neben dem Plus auf dem Mülleimer drückt. Am Ende nicht vergessen auf Abschicken zu clicken!");
    }
    function send(_event) {
        alert("Ihr Auftrag wurde abgeschickt");
    }
    // 
    function deleteForm(_event) {
        this.parentNode.remove();
    }
    L05.deleteForm = deleteForm;
    ;
    function deleteBox(_event) {
        this.parentNode.remove();
    }
    L05.deleteBox = deleteBox;
    function displayOrder() {
        console.log("displayOrder");
    }
    L05.displayOrder = displayOrder;
})(L05 || (L05 = {}));
//# sourceMappingURL=Haushaltshilfe.js.map