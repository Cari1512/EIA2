namespace L02_Blackmailer {
    console.log("HI");
    let chosenCharacter: string = "A";
    let chosenCharacters: string = "A";
    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void {
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        mail.addEventListener("click", targetStudy);
        mail.addEventListener("pointerdown", targetStudys);// bisher separat von click even, wegen aufgeteilten functions
        document.addEventListener("keydown", chooseCharacter);
        let alphabet: HTMLElement = <HTMLElement>document.querySelector("div#selection");
        alphabet.addEventListener("pointerdown", chooseAlphabet);
    }
// Lösungsweg 3
    function targetStudy (_event: MouseEvent): void {
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail")
        if (_event.target == mail) {
            placeLetter(_event);
        }
            else {
                deleteLetter(_event);
            }
    }
    function targetStudys (_event: PointerEvent): void { //für touch event
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail")
        if (_event.target == mail) {
            placeLetters(_event);
        }
            else {
                deleteLetter(_event);
            }
    }

    function placeLetter(_event: MouseEvent): void {
        // console.log(_event);
        //_event.stopPropagation();  Lösungsweg 1
        //if (_event.target== _event.currentTarget) {  Lösungsweg 2
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let mail: HTMLElement =<HTMLElement> _event.target;
        let letter: HTMLSpanElement = document.createElement("span");
        letter.setAttribute("id", "letter");
        mail.appendChild(letter);

        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";

        //letter.addEventListener("click", deleteLetter); //}
       
    }
    function placeLetters(_event: PointerEvent): void {// warum functioniert das nicht
        // console.log(_event);
        //_event.stopPropagation();  Lösungsweg 1
        //if (_event.target== _event.currentTarget) {  Lösungsweg 2
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let mail: HTMLElement =<HTMLElement> _event.target;
        let letter: HTMLSpanElement = document.createElement("span");
        letter.setAttribute("id", "letter");
        mail.appendChild(letter);

        letter.textContent = chosenCharacters;
        letter.style.left = x + "px";
        letter.style.top = y + "px";

        //letter.addEventListener("click", deleteLetter); //}
       
    }

    function chooseAlphabet(_event: PointerEvent): void {
        let target:Node = <Node> _event.target;
        chosenCharacters =  target.textContent;
        
        console.log(chosenCharacters);
    }
    function chooseCharacter(_event: KeyboardEvent): void{
        // console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event: MouseEvent): void {
       let target:Node = <Node> _event.target;
       let parent:Node = <Node> target.parentNode;
       parent.removeChild(target);
    }
}
//Problem: wie setzte ich auf eine function mehrere Eventarten drauf?