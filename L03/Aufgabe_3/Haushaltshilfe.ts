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
        plus.addEventListener("click",Add);
        Box.appendChild(Erledigung);
        Box.appendChild(plus);
        let column:HTMLFormElement = <HTMLFormElement>document.querySelector("form#column1");
        column.appendChild(Box);



    }


function Add (_event:Event ): void {
    let selectedTask = (<HTMLInputElement>document.querySelector(".Erledigung")).value;
    console.log(selectedTask);
    switch(selectedTask){
        case "Einkaufen":
            Einkaufen;
            break;
        case "Haushalt":
            Haushalt;
            console.log("Haushaltfunction");
            break;
        case "Fahrdienst":
            Fahrdienst;
            break;
    }
};

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