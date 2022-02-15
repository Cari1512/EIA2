namespace KebapHouse {
    export class Vector {
        public x: number;
        public y: number;

        public constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public get length(): number {
            let length: number = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
            return (length);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public copy(): Vector {
            let copy: Vector = new Vector(this.x, this.y);
            return (copy);
        }

        public round(): Vector {
            let roundedVector: Vector = new Vector(Math.round(this.x), Math.round(this.y));
            return roundedVector;
        }

        public compare(_vector: Vector): boolean {
            if (Math.round(this.x) == Math.round(_vector.x) && Math.round(this.y) == Math.round(_vector.y)) {
                return true;
            }
            return false;
        }
    }
}