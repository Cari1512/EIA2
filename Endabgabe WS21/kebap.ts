namespace KebapHouse {

  window.addEventListener("DOMContentLoaded", hndLoad);
  let startDiv: HTMLDivElement;
  export let crc2: CanvasRenderingContext2D;

  let start: HTMLButtonElement;
  let customers: Customer[] = [];

  function hndLoad(): void {
    start = <HTMLButtonElement>document.querySelector("#startButton");
    start.addEventListener("click", hndStart);
  }

  function hndStart(_event: Event): void {
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
    crc2 = canvas.getContext("2d")!;
    startDiv.appendChild(canvas);
    startGame();
  }

  function startGame(): void {
    update();
    customers.push(new Customer(new Vector(400, 400)));
    customers.push(new Customer(new Vector(450, 400)));
    customers.push(new Customer(new Vector(300, 400)));
    customers[0].draw();
    console.log(customers);


  }

  function update(): void {
    window.requestAnimationFrame(update);
  }


}
