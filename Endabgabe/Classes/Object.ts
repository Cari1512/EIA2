namespace Endabgabe{

    export abstract class Object{
        public color: string;
        public size: Vector;
        public position: Vector;
        public positionB: Vector;
        public rotation: number;
        public active: boolean;
        public velocity: Vector = new Vector(5, 5);
        
        
        constructor(_position: Vector, _positionB: Vector) {
            
            this.position = _position.copy();
            this.positionB = _positionB.copy();
            
         
        }
        abstract draw(): void;

        public move(): void {

            let offset: Vector = this.velocity.copy();
            offset.scale(3);
            this.position.add(offset);

    }
    }
}