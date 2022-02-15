namespace KebapHouse {
  export class Storage {

    public volume: number;
    public content: INGREDIENT;
    public storageID: number;

    constructor(_id: number, _ingredient: INGREDIENT) {
      this.storageID = _id;
      this.content = _ingredient;
      this.volume = 20;
    }

    // Calculates the percentage of amount left in storage
    public calcPercentage(): string {
      return Math.floor((this.volume / 20) * 100) + "%";
    }
  }
}