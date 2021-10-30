namespace EventInspector{
    window.addEventListener("load", handleLoad);
    
    
    function handleLoad(_event: Event): void {
        document.addEventListener("customEvent", handlerFunction);
        let btn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        let event: CustomEvent = new CustomEvent("CustomEvent", {bubbles: true, detail: {someKey: "hello"}});
        btn.dispatchEvent(event);
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        let body:  HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
        let div: HTMLDivElement = <HTMLDivElement>document.querySelector("div");
        div.addEventListener("keyup", logInfo);
        div.addEventListener("click", logInfo);
    }
    function setInfoBox(_event: MouseEvent): void{

        let x: number = _event.pageX;
        let y: number = _event.pageY;

        let position: HTMLElement = <HTMLElement>document.querySelector("span");
        let mouseTarget: HTMLElement = <HTMLElement>_event.target;
        let targetName = mouseTarget.localName;
        position.innerHTML = " target: " + targetName + " " + "<br>" + " x: " + x + "<br>" + " y: " + y;

        position.style.left = x + 7 + "px";
        position.style.top = y + 12 + "px";


    }
    function logInfo(_event: Event): void{

        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);

    }
    

    function handlerFunction (_event: Event){
        console.log(_event);
       
    }
}