namespace Haushaltshilfe {

    export interface Item {
        category:string;
        name: string;
        price: number;
    }

    export interface Data {
        [task: string]: Item[];
    }

    export interface Element{
        name:string;
    }

    export interface Detail{
        [space:string]: Element[];
    }

    
}