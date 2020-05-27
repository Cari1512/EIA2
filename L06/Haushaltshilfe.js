"use strict";
var L06;
(function (L06) {
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        let response = await fetch("Data05.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        let answer = await fetch("Detail05.json");
        let offers = await answer.text();
        let detail = JSON.parse(offers);
        let Send = document.querySelector("button#Send");
        let Help = document.querySelector("#Help");
        let toOrder = document.querySelector("#toOrder");
        let reset = document.querySelector("#reset");
        L06.generateContent(data);
        L06.generateDetail(detail);
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
    // 
    function resetOrder(_event) {
        let order = document.querySelector("#order");
        order.innerHTML = "";
    }
    async function send(_event) {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            console.log(entry[1]);
        }
        //Query-String zusammenbauen 
        let query = new URLSearchParams(formData);
        //Fetch (suchen der HTML-Datei (Haushaltshilfe))
        await fetch("Haushaltshilfe.html?" + query.toString());
        alert("Ihr Auftrag wurde abgeschickt");
    }
})(L06 || (L06 = {}));
//# sourceMappingURL=Haushaltshilfe.js.map