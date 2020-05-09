namespace Haushaltshilfe{
    window.addEventListener("load", handleLoad);
    

    function handleLoad (_event: Event): void {
        let Task:HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Task");
        let Send:HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Send");
        let Help:HTMLElement = <HTMLElement>document.querySelector("#Help");

        Task.addEventListener("click", newTask);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help)


    }
    
    function help (_event: Event): void {
        alert ("Wie funktioniert es: Um eine neue Erledigung hinzuzufügen klicken Sie auf den Button mit der Beschriftung:neue Erledigung. Um innerhalb einer Erledigung eine Aufgabe/ein Produkt hinzuzufügen bitte auf das Plus klicken. Füllen Sie alle aus Fächer aus. Um ein Produkt/Aufgabe zu löschen auf den kleinen Mülleimer drücken. Man kann auch eine ganze Erledigung löschen, indem man neben dem Plus auf dem Mülleimer drückt. Am Ende nicht vergessen auf Abschicken zu clicken!");
    }
    function send (_event:Event): void{
        alert ("Ihr Auftrag wurde abgeschickt");
    }
    function newTask (_event:Event): void {
        let Box:HTMLDivElement = document.createElement("div");
        Box.setAttribute("class","box");
        let Erledigung:HTMLSelectElement = document.createElement("select");
        Erledigung.setAttribute("class","Erledigung");
        var array = ["Einkaufen","Haushalt","Fahrdienst"];
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            Erledigung.appendChild(option);};

        
        let plus:HTMLDivElement = document.createElement("div");
        plus.setAttribute("class", "addArtikel");
        plus.innerHTML="+";
        plus.addEventListener("click",Add);
        let d_Trash:HTMLElement =<HTMLElement>document.createElement("i");
        d_Trash.setAttribute("class", "far fa-trash-alt");
        
        Box.appendChild(Erledigung);
        Box.appendChild(plus);
        Box.appendChild(d_Trash);
        let column:HTMLFormElement = <HTMLFormElement>document.querySelector("form#column1");
        column.appendChild(Box);



    }


function Add (_event:Event ): void {
    let selectedTask = (<HTMLInputElement>document.querySelector(".Erledigung")).value;
    console.log(selectedTask);
    //let currentform:HTMLElement =<HTMLElement>document.querySelector();
    let deleter:HTMLElement =<HTMLElement>document.createElement("i");
    deleter.setAttribute("class", "far fa-trash-alt");
    let form:HTMLDivElement = <HTMLDivElement>document.createElement("div");
    form.setAttribute("class", "form");
    form.addEventListener("change", displayOrder);
    let Box:HTMLDivElement= <HTMLDivElement>document.querySelector("div.box");
    Box.appendChild(form);
    form.appendChild(deleter);
    switch(selectedTask){
        case "Einkaufen":
            Einkaufen;//Warum kann die Funktion nicht ausgeführt werden
            break;
        case "Haushalt":
            Haushalt; //Warum kann die Funktion nicht ausgeführt werden
            console.log("Haushaltfunction")
                let what:HTMLInputElement=<HTMLInputElement>document.createElement("input");
                what.setAttribute("class", "Artikel")
                what.placeholder="Wie können wir Sie unterstützen?";
                let amount:HTMLInputElement=<HTMLInputElement>document.createElement("input");
                amount.setAttribute("class", "Dauer")
                let label:HTMLLabelElement=<HTMLLabelElement>document.createElement("label");
                label.innerText="Dauer";
                label.htmlFor="form";
                
            break;
        case "Fahrdienst":
            Fahrdienst;//Warum kann die Funktion nicht ausgeführt werden
            break;
    }
};












function displayOrder():void{
    console.log("displayOrder")
}
function Einkaufen(): void{
    console.log("Einkauffunction")
}
function Haushalt(): void{
    console.log("Haushaltfunction")
}
function Fahrdienst(): void{
    console.log("Fahrdienstfunction")
}



}