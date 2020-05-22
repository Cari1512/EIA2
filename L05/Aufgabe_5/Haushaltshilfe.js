"use strict";
var L05;
(function (L05) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let Send = document.querySelector("button#Send");
        let Help = document.querySelector("#Help");
        let toOrder = document.querySelector("#toOrder");
        L05.generateContent(L05.data);
        L05.generateDetail(L05.detail);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help);
        toOrder.addEventListener("click", handleChange);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        let productOrder = document.createElement("div");
        let order = document.querySelector("#order");
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            console.log(entry[1]);
            switch (entry[0]) {
                case "product":
                    let itemPrice = Number(item.getAttribute("price"));
                    let menge = String(entry[1]);
                    let input = formData.get(menge);
                    let amount = Number(input);
                    let einheit = String(item.getAttribute("unit"));
                    let markt = String(formData.get("ort"));
                    itemPrice = amount * itemPrice;
                    productOrder.innerHTML += "" + entry[1];
                    productOrder.innerHTML += "" + itemPrice.toFixed(2) + "€";
                    productOrder.innerHTML += "" + amount;
                    productOrder.innerHTML += "" + einheit;
                    productOrder.innerHTML += "" + markt;
                    order.appendChild(productOrder);
            }
        }
    }
    function help(_event) {
        alert("Wie funktioniert es: Um eine neue Erledigung hinzuzufügen klicken Sie auf den Button mit der Beschriftung:neue Erledigung. Um innerhalb einer Erledigung eine Aufgabe/ein Produkt hinzuzufügen bitte auf das Plus klicken. Füllen Sie alle aus Fächer aus. Um ein Produkt/Aufgabe zu löschen auf den kleinen Mülleimer drücken. Man kann auch eine ganze Erledigung löschen, indem man neben dem Plus auf dem Mülleimer drückt. Am Ende nicht vergessen auf Abschicken zu clicken!");
    }
    function send(_event) {
        alert("Ihr Auftrag wurde abgeschickt");
    }
    // 
    function displayOrder() {
        console.log("displayOrder");
    }
    L05.displayOrder = displayOrder;
})(L05 || (L05 = {}));
//# sourceMappingURL=Haushaltshilfe.js.map