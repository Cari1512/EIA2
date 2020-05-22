namespace L05 {

    export interface Item{
        name: string;
        unit: string;
        price: number;
    }
    

    export interface Data {
        [category: string]: Item[];
    }

    
    export interface Element{
        name:string;
    }

    export interface Detail {
        [product:string]: Element[];
    }

    
}