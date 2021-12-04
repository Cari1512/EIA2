namespace Farm {

    window.addEventListener("DOMContentLoaded", handleLoad);

    let cow = new Animal("Cow", "Dottie", "Moo", "Grass", 30, 210);
    let chicken = new Animal("Chicken", "Drumstick", "Cluck", "Grains", 4, 24);
    let dog = new Animal("Dog", "Pup Tart", "woof", "Meat", 8, 80);
    let horse = new Animal("Horse", "Real Quiet", "Neigh", "Hay", 15, 150);
    let cat = new Animal("Cat", "Dumpling", "Miau", "Fish", 5, 65);
    let allAnimals: Animal[] = [cow, chicken, dog, horse, cat];

    let food: HTMLDivElement;
    let song: HTMLDivElement;
    

    function handleLoad(_event: Event): void {
        for (let i: number = 0; i < allAnimals.length; i++) {
            let lyrics: HTMLParagraphElement = document.createElement("p");
            song = <HTMLDivElement>document.querySelector("#song");  
            lyrics.innerHTML = allAnimals[i].sing();
            song.appendChild(lyrics);

            let stock: HTMLSpanElement = document.createElement("span");
            allAnimals[i].totalFood = allAnimals[i].totalFood - allAnimals[i].dailyAmount;
            stock.innerHTML = allAnimals[i].food();
            food = <HTMLDivElement>document.querySelector("#food");
            food.appendChild(stock);
        }


    }
}