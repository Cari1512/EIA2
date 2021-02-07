namespace Potions {
    export interface Potion {
        name: string; 
        image: string; 
        value: string;
    }

    export interface Data {
        [category: string]: Potion[]; 
    }
}