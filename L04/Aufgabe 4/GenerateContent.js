"use strict";
/* namespace HomeHelp {

    

    export function newTask( _data:Data): void {
        let Box: HTMLDivElement = document.createElement("div");
        Box.setAttribute("class", "box");
        let Erledigung: HTMLSelectElement = document.createElement("select");
        Erledigung.setAttribute("class", "Erledigung");

        //Select optionen werden angehängt
        for (let task in _data) {
            var option = document.createElement("option");
            option.value = task;
            option.text = task;
            Erledigung.appendChild(option);
        };
        //Plus Button zum Hinzufügen von Erledigungen
        let plus: HTMLDivElement = document.createElement("div");
        plus.setAttribute("class", "addArtikel");
        plus.innerHTML = "+";
        plus.addEventListener("click", add);

        //----------------------------------------Müll wird erstellt
        // ---------------------------------------let d_Trash: HTMLElement = <HTMLElement>document.createElement("i");
        // ---------------------------------------d_Trash.setAttribute("class", "far fa-trash-alt");
        // ---------------------------------------d_Trash.addEventListener("click", deleteBox);

        //Select, Pluss Button und Müll werden in das Box Div als Kind gehängt
        Box.appendChild(Erledigung);
        Box.appendChild(plus);
        // -------------------------------------------------------Box.appendChild(d_Trash);

        //Box in die erste Column
        let column: HTMLFormElement = <HTMLFormElement>document.querySelector("form#column1");
        column.appendChild(Box);
    }





     export function add(this: any, _event: Event): void {

        //Was wurde Selektiert?
        let selectedTask = (<HTMLInputElement>document.querySelector(".Erledigung")).value;
        console.log(selectedTask);

        //Müll icon wird erstellt und Eventlistener drangehängt
        let deleter: HTMLElement = <HTMLElement>document.createElement("i");
        deleter.setAttribute("class", "far fa-trash-alt");
        deleter.setAttribute("id", "trashform");
        deleter.addEventListener("click", deleteForm);

        //form div wird erstellt und ein change eventlistener drangehängt
        let form: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        form.setAttribute("class", "form");
        form.addEventListener("change", displayOrder);

        //Müll und form wird in die Box gehängt
        let target: Node = <Node>_event.target;
        let Box: Node = <Node>target.parentNode;
        Box.appendChild(form);
        form.appendChild(deleter);

        //Was soll passieren bei jedem selektierten Task?
        switch (selectedTask) {
            case "einkaufen":
                einkaufen(form);
                break;
            case "haushalt":
                haushalt(form);
                break;
            case "fahrdienst":
                fahrdienst(form);
                break;
        }
    };







    export function einkaufen(form:HTMLElement): void {
       // console.log("Einkauffunktion")
       // generateContent(Data);
       // generateDetail(Data);
        // let what: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        //         what.setAttribute("class", "Artikel");
        //         what.placeholder = "Was möchten Sie Einkaufen?";
        //         let amount1: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        //         amount1.setAttribute("class", "Menge");
        //         amount1.placeholder = "1";
        //         let label1: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
        //         label1.innerText = "Menge";
        //         label1.htmlFor = "Menge";
        //         let unit1: HTMLSelectElement = document.createElement("select");
        //         unit1.setAttribute("class", "Einheit");
        //         var array = ["Pack", "Gramm", "kg", "Liter","ml","Flaschen", "Leib","Karton"];
        //         for (var i = 0; i < array.length; i++) {
        //             var option = document.createElement("option");
        //             option.value = array[i];
        //             option.text = array[i];
        //             unit1.appendChild(option);
        //         };
        //         var array1 = ["Aldi", "Lidl", "Netto", "Rewe"];
        //         let radiospan:HTMLSpanElement= <HTMLSpanElement>document.createElement("span");
        //         for (var i = 0; i < array1.length; i++) {
        //             let where:HTMLInputElement = <HTMLInputElement>document.createElement("input");
        //             where.setAttribute("type","radio");
        //             where.value = array1[i];
        //             where.id = array1[i];
        //             where.name="Container";
        //             let label:HTMLLabelElement =<HTMLLabelElement>document.createElement("label");
        //             label.htmlFor=array1[i];
        //             label.innerText=array1[i];
        //             radiospan.appendChild(label);
        //             radiospan.appendChild(where);
        //         };
        //         form.appendChild(what);
        //         form.appendChild(label1);
        //         form.appendChild(amount1);
        //         form.appendChild(unit1);
        //         form.appendChild(radiospan);

    }





    export function haushalt(form:HTMLElement): void {
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
    }




    
    export function fahrdienst(form:HTMLElement): void {
        console.log("Fahrdienstfunction")
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
    }


    export function generateContent(_data: Data): void{
       
        for (let category in _data.category) {
  //          let items: Item[] = _data[category];
            
   //         let group: HTMLElement | null = null; //es darf auch null sein
            switch (category) {
                case "Einkaufen":
                    console.log(category);
  //                  group = createSelect(items, category);
                    break;
                case "Haushalt":
                   // group = createSingle(items, category);
                    break;
                case "Fahrdienst":
                   // group = createMultiple(items, category);
                    break;

                default:
                    break;
            }
        }
    }



//createSelect


























































}
 */ 
//# sourceMappingURL=GenerateContent.js.map