namespace L05 {
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {

        let Send: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Send");
        let Help: HTMLElement = <HTMLElement>document.querySelector("#Help");
        let toOrder: HTMLFormElement = <HTMLFormElement>document.querySelector("#toOrder");

        generateContent(data);
        generateDetail(detail);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help);
        toOrder.addEventListener("click", handleChange);


    }
    function handleChange(_event:Event): void{
        let formData: FormData = new FormData(document.forms[0]);
        let productOrder:HTMLDivElement = document.createElement("div");
        let order:HTMLDivElement |null =document.querySelector("#order");
        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            console.log(entry[1]);
            switch(entry[0]) {
                case"product":
                let itemPrice: number =Number(item.getAttribute("price"));
                let menge: string = String(entry[1]);
                let input = formData.get(menge);
                let amount: number = Number(input);
                let einheit: string = String(item.getAttribute("unit"));
                let markt: string = String(formData.get("ort"));
                itemPrice = amount * itemPrice;
                productOrder.innerHTML+= "" + entry[1];
                productOrder.innerHTML+= ""+itemPrice.toFixed(2)+"€";
                productOrder.innerHTML+= ""+amount;
                productOrder.innerHTML+= ""+einheit;
                productOrder.innerHTML+= ""+markt;
                order.appendChild(productOrder);
                
            }
    
        }
        }


    function help(_event: Event): void {
        alert("Wie funktioniert es: Um eine neue Erledigung hinzuzufügen klicken Sie auf den Button mit der Beschriftung:neue Erledigung. Um innerhalb einer Erledigung eine Aufgabe/ein Produkt hinzuzufügen bitte auf das Plus klicken. Füllen Sie alle aus Fächer aus. Um ein Produkt/Aufgabe zu löschen auf den kleinen Mülleimer drücken. Man kann auch eine ganze Erledigung löschen, indem man neben dem Plus auf dem Mülleimer drückt. Am Ende nicht vergessen auf Abschicken zu clicken!");
    }
    function send(_event: Event): void {
        alert("Ihr Auftrag wurde abgeschickt");
    }
    // 
   












    export function displayOrder(): void {
        console.log("displayOrder")
    }
  


}