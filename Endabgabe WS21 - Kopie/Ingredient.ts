namespace KebapHouse {

  export enum INGREDIENT {
    MEAT, TOMATO, SALAD, ONION, CABBAGE, KEBAB, YUFKA, LAHMACUN, SPICY
  }

  export class Ingredient {

    // Function that returns ingredient as string
    public getIngredient(_ingredient: INGREDIENT): string {
      switch (_ingredient) {
        case 0: return "Meat";
        case 1: return "Tomato";
        case 2: return "Salad";
        case 3: return "Onion";
        case 4: return "Cabbage";
        case 5: return "Kebab";
        case 6: return "Yufka";
        case 7: return "Lahmacun";
        case 8: return "Spicy";
        default: return "No ingredient";
      }
    }


  }

}