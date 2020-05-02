namespace Sequenzmemory {

    //Variablen global
    let Sequenz: any = [];
    let Cards: any = [];
    let counter: string;
    //let index:number= 0

    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        let input: HTMLElement = <HTMLElement>document.querySelector("div#input");
        input.addEventListener("change", inputUser);
    }

    function inputUser(_event: Event): void {
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));
        for (let entry of formData) {
            console.log(entry);
            switch (entry[0]) {
                case "Sequence":
                //Noch nicht funktionsfähig!

                case "Sequenz":
                    Sequenz = [];
                    let value: string = <string>entry[1];
                    let solution: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#solution");
                    solution.innerHTML = value;
                    let letters = value.split("");
                    Sequenz.push(letters);
                    DisplayCards();
                    break

                case "chances":
                    counter = <string>entry[1];
                    let Versuche: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#counter");
                    Versuche.innerHTML = counter;

            }
        }


    }

    function DisplayCards(): void {
        Cards = [];
        Cards = Sequenz;
        let arraylength: number = Cards.length;
        for (let i: number = 0; i < arraylength; i++) {
            let x: number = Math.floor(Math.random() * (arraylength - 1));
            let tempi: number = Cards[i];
            let tempx: number = Cards[x];
            Cards[i] = tempx;
            Cards[x] = tempi;
        }
       for(let i: number = 0; i < Cards.length; i++) {
           let Card:HTMLSpanElement = document.createElement("span");
           Card.setAttribute("class", "Card");
           Card.textContent = Cards[i];
           let playground: HTMLDivElement = <HTMLDivElement>document.querySelector("#playground");
           playground.appendChild(Card);
       }
       

    }











}