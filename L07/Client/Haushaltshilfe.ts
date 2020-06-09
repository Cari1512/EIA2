namespace L07 {
    window.addEventListener("load", handleLoad);
    //let url:string = "Haushaltshilfe.html";
    let url:string = "https://carianne.herokuapp.com/";
    let getOrderData: HTMLButtonElement; 
     
    let orderData: HTMLDivElement;

    async function handleLoad(_event: Event): Promise<void> {
        getOrderData = <HTMLButtonElement>document.getElementById("getOrderData");
        
        let response: Response = await fetch("Data07.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        let answer: Response = await fetch("Detail07.json");
        let offers: string = await answer.text();
        let detail: Detail = JSON.parse(offers);

        let Send: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Send");
        let Help: HTMLElement = <HTMLElement>document.querySelector("#Help");
        let toOrder: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#toOrder");
        let reset:HTMLButtonElement = <HTMLButtonElement>document.querySelector("#reset");
        generateContent(data);
        generateDetail(detail);
        Send.addEventListener("click", send);
        Help.addEventListener("click", help);
        toOrder.addEventListener("click", handleChange);
        reset.addEventListener("click", resetOrder);
        getOrderData.addEventListener("click", getData); 


    }
    function handleChange(_event:Event): void{
        let i:number = 1;
        let formData: FormData = new FormData(document.forms[0]);
        let order:HTMLDivElement = <HTMLDivElement>document.querySelector("#order");
        order.innerHTML="";
        let productOrder:HTMLDivElement = document.createElement("div");
        productOrder.setAttribute("id", "productOrder");
        let householdOrder:HTMLDivElement = document.createElement("div");
        householdOrder.setAttribute("id", "householdOrder");
        let drivingOrder:HTMLDivElement = document.createElement("div");
        drivingOrder.setAttribute("id", "drivingOrder");
        let br:HTMLBRElement = document.createElement("br");
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
                productOrder.innerHTML+= i+".  " + entry[1];
                productOrder.innerHTML+= "   "+itemPrice.toFixed(2)+"€";
                productOrder.innerHTML+= "   "+amount;
                productOrder.innerHTML+= " "+einheit;
                productOrder.innerHTML+= "    "+markt;
                productOrder.appendChild(br);
                i++;
                order.appendChild(productOrder);
                break;
                case"household":
                let taskPrice: number =Number(item.getAttribute("price"));
               
                householdOrder.innerHTML+= i+".  " + entry[1];
                householdOrder.innerHTML+= "   "+taskPrice.toFixed(2)+"€";
               
                householdOrder.appendChild(br);
                order.appendChild(householdOrder);
                i++;
                break;
                case "driving":
                let drivePrice: number =Number(item.getAttribute("price"));
                let drive: string = String(formData.get("fahrt"));
                if (drive== "Hin-und Rückfahrt"){
                    drivePrice= drivePrice*2;
                }
                drivingOrder.innerHTML+= i+"."+entry[1];
                drivingOrder.innerHTML+= "   "+drive;
                drivingOrder.innerHTML+= "   "+ drivePrice.toFixed(2)+"€";
                order.appendChild(drivingOrder);
                i++;
                break;
                default:
                    break;
            }
            
        }
        }


    function help(_event: Event): void {
        alert("Wie funktioniert es: Um eine neue Erledigung hinzuzufügen klicken Sie auf den Button mit der Beschriftung:neue Erledigung. Um innerhalb einer Erledigung eine Aufgabe/ein Produkt hinzuzufügen bitte auf das Plus klicken. Füllen Sie alle aus Fächer aus. Um ein Produkt/Aufgabe zu löschen auf den kleinen Mülleimer drücken. Man kann auch eine ganze Erledigung löschen, indem man neben dem Plus auf dem Mülleimer drückt. Am Ende nicht vergessen auf Abschicken zu clicken!");
    }
   
    async function getData(_event: Event): Promise<void> {
        orderData  = <HTMLDivElement>document.getElementById("anfrage"); 
        let response: Response = await fetch(url + "?" + "getOrder=yes"); 
        orderData.innerHTML = ""; 
        let responseText: string = await response.text(); 
        let pretty: string = responseText.replace(/\\|{|}|"|/g, ""); 
        console.log(pretty);
        for (let entry of pretty) {
            switch(entry) {
            case("_"):
            orderData.innerHTML += "<br>" + "Bestell-ID: " + entry ; 
            break;
            case("["):
            break; 
            case("]"): 
            break; 
            case(","): 
            orderData.innerHTML += "<br>"; 
            break; 
            case(":"):
            orderData.innerHTML += entry + " "; 
            break; 
            default:
            orderData.innerHTML += "" + entry ; 
            break; 
            }
        }
        console.log(responseText); 
    }
   
function resetOrder(_event:Event): void{
    let order:HTMLDivElement = <HTMLDivElement>document.querySelector("#order");
        order.innerHTML="";
}

async function send(_event: Event): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    
    for (let entry of formData) {
        console.log(entry[1]);
    } 
    //Query-String zusammenbauen 
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    //Fetch (suchen der HTML-Datei (Haushaltshilfe))
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();

    alert(responseText);
}










    
  


}