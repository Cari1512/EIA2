namespace KebapHouse {

    window.addEventListener("DOMContentLoaded", hndLoad);
    let startDiv: HTMLDivElement;
    export let crc2: CanvasRenderingContext2D;
    
  let start: HTMLButtonElement;

    function hndLoad(): void {
        start = <HTMLButtonElement>document.querySelector("#startButton");
        start.addEventListener("pointerdown", hndStart);
    }
   

    function hndStart(_event: Event): void {

        startDiv = <HTMLDivElement>document.querySelector("#overlay");
        startDiv.innerHTML = "";
        startDiv.classList.remove("overlayStyle");
        startDiv.classList.add("content");
       hndlayout();
    } 
 function hndlayout(): void{
        let headline: HTMLParagraphElement = document.createElement("p");
        headline.innerHTML = "Kebap House" ;
        startDiv.appendChild(headline);

        let canvas: HTMLCanvasElement = document.createElement("canvas");
        crc2 = canvas.getContext("2d")!;
        startDiv.appendChild(canvas);

        
 }

 
}
