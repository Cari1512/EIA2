
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
        mainsite();
    }

    function mainsite(): void {
        startDiv = <HTMLDivElement>document.querySelector("#overlay");
       startDiv.classList.add("newStyle");
       
    }
}
