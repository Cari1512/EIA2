"use strict";
var L07;
(function (L07) {
    window.addEventListener("load", handleLoad);
    //let url:string = "Haushaltshilfe.html";
    let url = "https://carianne.herokuapp.com/";
    let getOrderData = document.getElementById("getOrderData");
    let orderData = document.getElementById("anfrage");
    async function handleLoad(_event) {
        let response = await fetch("Data07.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        let answer = await fetch("Detail07.json");
        let offers = await answer.text();
        let detail = JSON.parse(offers);
        let Send = document.querySelector("button#Send");
        let Help = document.querySelector("#Help");
        let toOrder = document.querySelector("#toOrder");
        let reset = document.querySelector("#reset");
        L07.generateContent(data);
        L07.generateDetail(detail);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help);
        toOrder.addEventListener("click", handleChange);
        reset.addEventListener("click", resetOrder);
        getOrderData.addEventListener("click", getData);
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
    async function getData(_event) {
        let response = await fetch(url + "?" + "getOrder=yes");
        orderData.innerHTML = "";
        let responseText = await response.text();
        let pretty = responseText.replace(/\\|{|}|"|/g, "");
        console.log(pretty);
        for (let entry of pretty) {
            switch (entry) {
                case ("_"):
                    orderData.innerHTML += "<br>" + "Bestell-ID: " + entry;
                    break;
                case ("["):
                    break;
                case ("]"):
                    break;
                case (","):
                    orderData.innerHTML += "<br>";
                    break;
                case (":"):
                    orderData.innerHTML += entry + " ";
                    break;
                default:
                    orderData.innerHTML += "" + entry;
                    break;
            }
        }
        console.log(responseText);
    }
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
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
})(L07 || (L07 = {}));
//# sourceMappingURL=Haushaltshilfe.js.map