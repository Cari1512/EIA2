namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        test;
        
        let Send: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Send");
        let Help: HTMLElement = <HTMLElement>document.querySelector("#Help");

        newTask(Data);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help)


    }

    function help(_event: Event): void {
        alert("Wie funktioniert es: Um eine neue Erledigung hinzuzufügen klicken Sie auf den Button mit der Beschriftung:neue Erledigung. Um innerhalb einer Erledigung eine Aufgabe/ein Produkt hinzuzufügen bitte auf das Plus klicken. Füllen Sie alle aus Fächer aus. Um ein Produkt/Aufgabe zu löschen auf den kleinen Mülleimer drücken. Man kann auch eine ganze Erledigung löschen, indem man neben dem Plus auf dem Mülleimer drückt. Am Ende nicht vergessen auf Abschicken zu clicken!");
    }
    function send(_event: Event): void {
        alert("Ihr Auftrag wurde abgeschickt");
    }
    // 
    function newTask( _data:Data): void {
        let Box: HTMLDivElement = document.createElement("div");
        Box.setAttribute("class", "box");
        let Erledigung: HTMLSelectElement = document.createElement("select");
        Erledigung.setAttribute("class", "Erledigung");
        
        for (let task in _data) {
            var option = document.createElement("option");
            option.value = task;
            option.text = task;
            Erledigung.appendChild(option);
        };


        let plus: HTMLDivElement = document.createElement("div");
        plus.setAttribute("class", "addArtikel");
        plus.innerHTML = "+";
        plus.addEventListener("click", Add);
        let d_Trash: HTMLElement = <HTMLElement>document.createElement("i");
        d_Trash.setAttribute("class", "far fa-trash-alt");
        d_Trash.addEventListener("click", deleteBox);
        Box.appendChild(Erledigung);
        Box.appendChild(plus);
        Box.appendChild(d_Trash);
        let column: HTMLFormElement = <HTMLFormElement>document.querySelector("form#column1");
        column.appendChild(Box);



    }


    //Probleme: Bei ändern der Erledigung müssen die alten forms gelöscht werden
    
    function Add(this: any, _event: Event): void {
        //let selectedTask = this.siblingNode.value;
        let selectedTask = (<HTMLInputElement>document.querySelector(".Erledigung")).value;//auf sibling zugreifen von Add?
        console.log(selectedTask);
        let deleter: HTMLElement = <HTMLElement>document.createElement("i");
        deleter.setAttribute("class", "far fa-trash-alt");
        deleter.setAttribute("id", "trashform");
        deleter.addEventListener("click", deleteForm);
        let form: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        form.setAttribute("class", "form");
        form.addEventListener("change", displayOrder);
        let target: Node = <Node>_event.target;
        let Box: Node = <Node>target.parentNode;
        Box.appendChild(form);
        form.appendChild(deleter);
        switch (selectedTask) {
            case "Einkaufen":
                Einkaufen;//Warum kann die Funktion nicht ausgeführt werden?
                let what1: HTMLInputElement = <HTMLInputElement>document.createElement("input");
                what1.setAttribute("class", "Artikel");
                what1.placeholder = "Was möchten Sie Einkaufen?";
                let amount1: HTMLInputElement = <HTMLInputElement>document.createElement("input");
                amount1.setAttribute("class", "Menge");
                amount1.placeholder = "1";
                let label1: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
                label1.innerText = "Menge";
                label1.htmlFor = "Menge";
                let unit1: HTMLSelectElement = document.createElement("select");
                unit1.setAttribute("class", "Einheit");
                var array = ["Pack", "Gramm", "kg", "Liter","ml","Flaschen", "Leib","Karton"];
                for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    unit1.appendChild(option);
                };
                var array1 = ["Aldi", "Lidl", "Netto", "Rewe"];
                let radiospan:HTMLSpanElement= <HTMLSpanElement>document.createElement("span");
                for (var i = 0; i < array1.length; i++) {
                    let where:HTMLInputElement = <HTMLInputElement>document.createElement("input");
                    where.setAttribute("type","radio");
                    where.value = array1[i];
                    where.id = array1[i];
                    where.name="Container";
                    let label:HTMLLabelElement =<HTMLLabelElement>document.createElement("label");
                    label.htmlFor=array1[i];
                    label.innerText=array1[i];
                    radiospan.appendChild(label);
                    radiospan.appendChild(where);
                };
                form.appendChild(what1);
                form.appendChild(label1);
                form.appendChild(amount1);
                form.appendChild(unit1);
                form.appendChild(radiospan);

                break;
            case "Haushalt":
                Haushalt; //Warum kann die Funktion nicht ausgeführt werden?
                console.log("Haushaltfunction")
                let what: HTMLInputElement = <HTMLInputElement>document.createElement("input");
                what.setAttribute("class", "Aufgabe");
                what.placeholder = "Wie können wir Sie unterstützen?";
                what.setAttribute("list","Aufgaben");//wie Aufgaben Datalist erstellen
                let amount: HTMLInputElement = <HTMLInputElement>document.createElement("input");
                amount.setAttribute("class", "Dauer");
                amount.placeholder = "1";
                let label: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
                label.innerText = "Dauer";
                label.htmlFor = "Dauer";
                let unit: HTMLSelectElement = document.createElement("select");
                unit.setAttribute("class", "Zeit");
                var array = ["Stunden", "Minuten"];
                for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    unit.appendChild(option);
                };

                form.appendChild(what);
                form.appendChild(label);
                form.appendChild(amount);
                form.appendChild(unit);

                break;
            case "Fahrdienst":
                Fahrdienst;//Warum kann die Funktion nicht ausgeführt werden?
                let what2: HTMLInputElement = <HTMLInputElement>document.createElement("input");
                what2.setAttribute("class", "Fahrt");
                what2.placeholder = "Wohin soll es gehen?";
                let amount2: HTMLInputElement = <HTMLInputElement>document.createElement("input");
                amount2.setAttribute("class", "Entfernung");
                amount2.placeholder = "1";
                let label2: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
                label2.innerText = "Entfernung";
                label2.htmlFor = "Entfernung";
                let unit2: HTMLSelectElement = document.createElement("select");
                unit2.setAttribute("class", "Distanz");
                var array = ["km", "minuten", "Stunden"];
                for (var i = 0; i < array.length; i++) {
                    var option = document.createElement("option");
                    option.value = array[i];
                    option.text = array[i];
                    unit2.appendChild(option);
                };
                var array1 = ["Hinfahrt", "Hin-und Rückfahrt"];
                let radiospan1:HTMLSpanElement= <HTMLSpanElement>document.createElement("span");
                for (var i = 0; i < array1.length; i++) {
                    let where:HTMLInputElement = <HTMLInputElement>document.createElement("input");
                    where.setAttribute("type","radio");
                    where.value = array1[i];
                    where.id = array1[i];
                    where.name="Container2";
                    let label:HTMLLabelElement =<HTMLLabelElement>document.createElement("label");
                    label.htmlFor=array1[i];
                    label.innerText=array1[i];
                    radiospan1.appendChild(label);
                    radiospan1.appendChild(where);
                };
                form.appendChild(what2);
                form.appendChild(label2);
                form.appendChild(amount2);
                form.appendChild(unit2);
                form.appendChild(radiospan1);

                break;
        }
    };

function deleteForm(this: any, _event:Event): void{
    this.parentNode.remove();
    
        
};
function deleteBox(this: any, _event:Event): void{
    this.parentNode.remove();
}










    function displayOrder(): void {
        console.log("displayOrder")
    }
    function Einkaufen(): void {
        console.log("Einkauffunction")
    }
    function Haushalt(): void {
        console.log("Haushaltfunction")
    }
    function Fahrdienst(): void {
        console.log("Fahrdienstfunction")
    }



}