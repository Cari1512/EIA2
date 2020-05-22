"use strict";
var L05;
(function (L05) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let Send = document.querySelector("button#Send");
        let Help = document.querySelector("#Help");
        let toOrder = document.querySelector("#toOrder");
        let reset = document.querySelector("#reset");
        L05.generateContent(L05.data);
        L05.generateDetail(L05.detail);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help);
        toOrder.addEventListener("click", handleChange);
        reset.addEventListener("click", resetOrder);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        let order = document.querySelector("#order");
        order.innerHTML = "";
        let productOrder = document.createElement("div");
        productOrder.setAttribute("id", "productOrder");
        let householdOrder = document.createElement("div");
        householdOrder.setAttribute("id", "householdOrder");
        let drivingOrder = document.createElement("div");
        drivingOrder.setAttribute("id", "drivingOrder");
        let br = document.createElement("br");
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
                    productOrder.appendChild(br);
                    order.appendChild(productOrder);
                    break;
                case "household":
                    let taskPrice = Number(item.getAttribute("price"));
                    let time = String(item.getAttribute("unit"));
                    householdOrder.innerHTML += "" + entry[1];
                    householdOrder.innerHTML += "" + taskPrice.toFixed(2) + "€";
                    householdOrder.innerHTML += "" + time;
                    householdOrder.appendChild(br);
                    order.appendChild(householdOrder);
                    break;
                case "driving":
                    let drivePrice = Number(item.getAttribute("price"));
                    let drive = String(formData.get("fahrt"));
                    if (drive == "Hin-und Rückfahrt") {
                        drivePrice = drivePrice * 2;
                    }
                    drivingOrder.innerHTML += "" + entry[1];
                    drivingOrder.innerHTML += "" + drive;
                    drivingOrder.innerHTML += "" + drivePrice.toFixed(2) + "€";
                    order.appendChild(drivingOrder);
                    break;
                default:
                    break;
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
    function resetOrder(_event) {
        let order = document.querySelector("#order");
        order.innerHTML = "";
    }
})(L05 || (L05 = {}));
//# sourceMappingURL=Haushaltshilfe.js.map