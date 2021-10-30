namespace Firework {
    let canvas: HTMLCanvasElement;
    //let crc2: CanvasRenderingContext2D;
    //let rockets: Rocket[]; 

    let rocketSizes: HTMLDivElement;
    let addNew: HTMLButtonElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.getElementById("canvas");
        //crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", fireRocket);
        canvas.width = 500;
        canvas.height = 500;

        rocketSizes = <HTMLDivElement>document.querySelector(".rocketWrapper");
        rocketSizes.addEventListener("click", rocketSize);

        addNew = <HTMLButtonElement>document.getElementById("addRocket");
        addNew.addEventListener("click", addRocket);

        createElements();
        createBackground();
    }

    export function selectColor(_event: MouseEvent): void {
        let target: HTMLImageElement = <HTMLImageElement>_event.target;

        if (target) {
            let allPotions: NodeListOf<HTMLImageElement> = document.querySelectorAll(".potion");

            for (let potion of allPotions) {
                if (potion.classList.contains("active")) {
                    potion.classList.remove("active");
                }
            }

            target.classList.add("active"); 

            console.log(allPotions, target); 
        }
    }

    function fireRocket(): void {
        //Let the Rocket explode
    }

    function rocketSize(): void {
        //change Size of Rocket
    }

    function addRocket(): void {
        // Add new Rocket
    }

    function createBackground(): void {

    }
}