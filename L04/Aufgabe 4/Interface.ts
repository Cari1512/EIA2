namespace HomeHelp {

    export interface Part{
        name: string;
        price: number;
    }
    export interface Item {
        [category:string]: Part[];
        
    }

    export interface Data {
        [task: string]: Item[];
    }
    
    export interface Element{
        name:string;
    }

    export interface Detail {
        [space:string]: Element[];
    }

    
}