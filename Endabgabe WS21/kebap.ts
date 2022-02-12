namespace KebapHouse {

  window.addEventListener("DOMContentLoaded", hndLoad);
  let startDiv: HTMLDivElement;
  export let crc2: CanvasRenderingContext2D;

  let start: HTMLButtonElement;
  let customers: Customer[] = [];

  let noteNumber: number;
  let customerNumber: number;
  let breakFrequency: number;
  

  function hndLoad(): void {
    let range: HTMLInputElement = <HTMLInputElement>document.getElementById("slider");
    range.addEventListener("mouseup", hndRange);
    start = <HTMLButtonElement>document.querySelector("#startButton");
    start.addEventListener("click", hndStart);
  }
  function hndRange(): void {
    let note: HTMLInputElement = <HTMLInputElement>document.getElementById("slider");
    noteNumber = parseInt(note.value);
    let box = document.getElementById("range");
    box!.innerHTML = noteNumber + "L";
  }

  function hndStart(_event: Event): void {
    let customerNumberElement: HTMLInputElement = <HTMLInputElement>document.getElementById("customernumber");
    customerNumber = parseInt(customerNumberElement.value);
    let breakFrequencyElement: HTMLInputElement = <HTMLInputElement>document.getElementById("frequency");
    breakFrequency = parseInt(breakFrequencyElement.value);
    console.log(breakFrequency, customerNumber);

    

    startDiv = <HTMLDivElement>document.querySelector("#overlay");
    startDiv.innerHTML = "";
    startDiv.classList.remove("overlayStyle");
    startDiv.classList.add("content");
    hndLayout();
    
  }

  function hndLayout(): void {
    let headline: HTMLParagraphElement = document.createElement("p");
    headline.innerHTML = "Kebap House";
    startDiv.appendChild(headline);
    
    let canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = 874;
    canvas.height = 700;
    crc2 = canvas.getContext("2d")!;
    startDiv.appendChild(canvas);
    startGame();
  }

  function startGame(): void {
    customers.push(new Customer(new Vector(400, 350)));
    customers.push(new Customer(new Vector(450, 400)));
    customers.push(new Customer(new Vector(280, 500)));
    update();
  }

  function update(): void {
    // let lastFrame: number = performance.now();
    // let frameTime: number = performance.now() - lastFrame;
    for (let person of customers) {
      person.draw();
      person.move(200/1000);
    }
    window.requestAnimationFrame(update);
  }

}