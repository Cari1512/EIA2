"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let Send = document.querySelector("button#Send");
        let Help = document.querySelector("#Help");
        Haushaltshilfe.newTask(Haushaltshilfe.Data);
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
    Haushaltshilfe.deleteForm = deleteForm;
    ;
    function deleteBox(_event) {
        this.parentNode.remove();
    }
    Haushaltshilfe.deleteBox = deleteBox;
    function displayOrder() {
        console.log("displayOrder");
    }
    Haushaltshilfe.displayOrder = displayOrder;
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=Haushaltshilfe.js.map