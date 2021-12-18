"use strict";
var Farm;
(function (Farm) {
    //insperation durch Dell'Oro, Amélie 
    window.addEventListener("DOMContentLoaded", handleLoad);
    let cow = new Farm.Animal("Cow", "Dottie", "Moo", "Grass", 30, 210);
    let chicken = new Farm.Animal("Chicken", "Drumstick", "Cluck", "Grains", 4, 24);
    let dog = new Farm.Animal("Dog", "Pup Tart", "woof", "Meat", 8, 80);
    let horse = new Farm.Animal("Horse", "Real Quiet", "Neigh", "Hay", 15, 150);
    let cat = new Farm.Animal("Cat", "Dumpling", "Miau", "Fish", 5, 65);
    let allAnimals = [cow, chicken, dog, horse, cat];
    let food;
    let song;
    function handleLoad(_event) {
        for (let i = 0; i < allAnimals.length; i++) {
            let lyrics = document.createElement("p");
            song = document.querySelector("#song");
            lyrics.innerHTML = allAnimals[i].sing();
            song.appendChild(lyrics);
            let stock = document.createElement("span");
            allAnimals[i].totalFood = allAnimals[i].totalFood - allAnimals[i].dailyAmount;
            stock.innerHTML = allAnimals[i].food();
            food = document.querySelector("#food");
            food.appendChild(stock);
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=main.js.map