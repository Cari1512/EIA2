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
        plus.innerHTML = "+";
        plus.addEventListener("click", Add);
        let d_Trash = document.createElement("i");
        d_Trash.setAttribute("class", "far fa-trash-alt");
        d_Trash.addEventListener("click", deleteBox);
        Box.appendChild(Erledigung);
        Box.appendChild(plus);
        Box.appendChild(d_Trash);
        let column = document.querySelector("form#column1");
        column.appendChild(Box);
    }
    //Probleme: Bei ändern der Erledigung müssen die alten forms gelöscht werden
    //Bei Neuer Erledigung wird bei jedem Case nur noch das Zuletzt genutzte case dargestellt
    function Add(_event) {
        //let selectedTask = this.siblingNode.value;
        let selectedTask = document.querySelector(".Erledigung").value; //auf sibling zugreifen von Add?
        console.log(selectedTask);
        let deleter = document.createElement("i");
        deleter.setAttribute("class", "far fa-trash-alt");
        deleter.setAttribute("id", "trashform");
        deleter.addEventListener("click", deleteForm);
        let form = document.createElement("div");
        form.setAttribute("class", "form");
        form.addEventListener("change", displayOrder);
        let target = _event.target;
        let Box = target.parentNode;
        Box.appendChild(form);
        form.appendChild(deleter);
        switch (selectedTask) {
            case "Einkaufen":
                Einkaufen; //Warum kann die Funktion nicht ausgeführt werden?
                let what1 = document.createElement("input");
                what1.setAttribute("class", "Artikel");
                what1.placeholder = "Was möchten Sie Einkaufen?";
                let amount1 = document.createElement("input");
                amount1.setAttribute("class", "Menge");
                amount1.placeholder = "1";
                let label1 = document.createElement("label");
                label1.innerText = "Menge";
                label1.htmlFor = "Menge";
                let unit1 = document.createElement("select");
                unit1.setAttribute("class", "Einheit");
                var array = ["Pack", "Gramm", "kg", "Liter", "ml", "Flaschen", "Leib", "Karton"];
                for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    unit1.appendChild(option);
                }
                ;
                var array1 = ["Aldi", "Lidl", "Netto", "Rewe"];
                let radiospan = document.createElement("span");
                for (var i = 0; i < array1.length; i++) {
                    let where = document.createElement("input");
                    where.setAttribute("type", "radio");
                    where.value = array1[i];
                    where.id = array1[i];
                    where.name = "Container";
                    let label = document.createElement("label");
                    label.htmlFor = array1[i];
                    label.innerText = array1[i];
                    radiospan.appendChild(label);
                    radiospan.appendChild(where);
                }
                ;
                form.appendChild(what1);
                form.appendChild(label1);
                form.appendChild(amount1);
                form.appendChild(unit1);
                form.appendChild(radiospan);
                break;
            case "Haushalt":
                Haushalt; //Warum kann die Funktion nicht ausgeführt werden?
                console.log("Haushaltfunction");
                let what = document.createElement("input");
                what.setAttribute("class", "Aufgabe");
                what.placeholder = "Wie können wir Sie unterstützen?";
                what.setAttribute("list", "Aufgaben"); //wie Aufgaben Datalist erstellen
                let amount = document.createElement("input");
                amount.setAttribute("class", "Dauer");
                amount.placeholder = "1";
                let label = document.createElement("label");
                label.innerText = "Dauer";
                label.htmlFor = "Dauer";
                let unit = document.createElement("select");
                unit.setAttribute("class", "Zeit");
                var array = ["Stunden", "Minuten"];
                for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    unit.appendChild(option);
                }
                ;
                form.appendChild(what);
                form.appendChild(label);
                form.appendChild(amount);
                form.appendChild(unit);
                break;
            case "Fahrdienst":
                Fahrdienst; //Warum kann die Funktion nicht ausgeführt werden?
                let what2 = document.createElement("input");
                what2.setAttribute("class", "Fahrt");
                what2.placeholder = "Wohin soll es gehen?";
                let amount2 = document.createElement("input");
                amount2.setAttribute("class", "Entfernung");
                amount2.placeholder = "1";
                let label2 = document.createElement("label");
                label2.innerText = "Entfernung";
                label2.htmlFor = "Entfernung";
                let unit2 = document.createElement("select");
                unit2.setAttribute("class", "Distanz");
                var array = ["km", "minuten", "Stunden"];
                for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    unit2.appendChild(option);
                }
                ;
                var array1 = ["Hinfahrt", "Hin-und Rückfahrt"];
                let radiospan1 = document.createElement("span");
                for (var i = 0; i < array1.length; i++) {
                    let where = document.createElement("input");
                    where.setAttribute("type", "radio");
                    where.value = array1[i];
                    where.id = array1[i];
                    where.name = "Container2";
                    let label = document.createElement("label");
                    label.htmlFor = array1[i];
                    label.innerText = array1[i];
                    radiospan1.appendChild(label);
                    radiospan1.appendChild(where);
                }
                ;
                form.appendChild(what2);
                form.appendChild(label2);
                form.appendChild(amount2);
                form.appendChild(unit2);
                form.appendChild(radiospan1);
                break;
        }
    }
    ;
    function deleteForm(_event) {
        this.parentNode.remove();
    }
    ;
    function deleteBox(_event) {
        this.parentNode.remove();
    }
    function displayOrder() {
        console.log("displayOrder");
    }
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