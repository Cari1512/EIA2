namespace KebapHouse {

  export class Order {

    public ingredients: INGREDIENT[] = [];
    public nameOfOrder: string = "";

    constructor(_name: string, _ingredients: INGREDIENT[]) {
      this.nameOfOrder = _name;
      this.ingredients = _ingredients;
    }   

  }

}