namespace L05 {
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {

        let Send: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Send");
        let Help: HTMLElement = <HTMLElement>document.querySelector("#Help");

        generateContent(data);
        generateDetail(detail);
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
   

export function deleteForm(this: any, _event:Event): void{
    this.parentNode.remove();
    
        
};
export function deleteBox(this: any, _event:Event): void{
    this.parentNode.remove();
}










    export function displayOrder(): void {
        console.log("displayOrder")
    }
  


}