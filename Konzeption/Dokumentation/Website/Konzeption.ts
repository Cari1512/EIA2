
namespace ourLostTrees {

    window.addEventListener("DOMContentLoaded", hndLoad);
    let startDiv: HTMLSpanElement;
  

    function hndLoad(): void {
        startDiv = <HTMLDivElement>document.querySelector("#overlay");
        startDiv.addEventListener("pointerdown", hndStart);
    }
   

    function hndStart(_event: Event): void {

      

        startDiv = <HTMLDivElement>document.querySelector("#overlay");
        startDiv.innerHTML = "";
        startDiv.classList.remove("overlayStyle");
       //startDiv.classList.add("content");
       hndlayout();
    } 
 function hndlayout(): void{
        let headline: HTMLParagraphElement = document.createElement("p");
        headline.innerHTML = "Our Lost Trees" ;
        startDiv.appendChild(headline);
        
 }
}
