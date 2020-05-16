namespace Haushaltshilfe {

    export  function newTask(_event: Event, _data: Data): void {
            let Box: HTMLDivElement = document.createElement("div");
            Box.setAttribute("class", "box");
            let Erledigung: HTMLSelectElement = document.createElement("select");
            Erledigung.setAttribute("class", "Erledigung");
            //var array = ["Einkaufen", "Haushalt", "Fahrdienst"];
            for (let task in _data) {
                var option = document.createElement("option");
                option.value = task;
                option.text = task;
                Erledigung.appendChild(option);
            };
    
    
            let plus: HTMLDivElement = document.createElement("div");
            plus.setAttribute("class", "addArtikel");
            // plus.innerHTML = "+";
            // plus.addEventListener("click", Add);
            let d_Trash: HTMLElement = <HTMLElement>document.createElement("i");
            // d_Trash.setAttribute("class", "far fa-trash-alt");
            // d_Trash.addEventListener("click", deleteBox);
            Box.appendChild(Erledigung);
            Box.appendChild(plus);
            Box.appendChild(d_Trash);
            let column: HTMLFormElement = <HTMLFormElement>document.querySelector("form#column1");
            column.appendChild(Box);
    
    
    
        }






































































}
