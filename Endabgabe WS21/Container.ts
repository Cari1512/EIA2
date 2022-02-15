namespace KebapHouse {
 
    export class Container {

      public volume: number;
      public content: INGREDIENT;
      public containerID: number;

      constructor(_id: number, _ingredient: INGREDIENT) {
        this.volume = maxContainerVolume;
        this.content = _ingredient;
        this.containerID = _id;
      }

      // Takes x amount of the ingredient out of the container
      public takeFromContainer(): void {
        if (this.volume > 0.5) {
          this.volume = this.volume - 0.5;
          let indicator: HTMLProgressElement = <HTMLProgressElement>document.getElementById("containerPercentage" + this.containerID);
          indicator.value = indicator.value - 0.5;
        }
      }

      // Refills container to maximum volume
      public refillContainer(): void {
        this.volume = maxContainerVolume;
      }

    }

}