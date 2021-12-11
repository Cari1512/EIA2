namespace GoldenerHerbstClasses {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        copy(): Vector {
            let copy: Vector = new Vector(this.x, this.y);
            return(copy);
        }

        random(_minLength: number, _maxLength: number, _minAngle: number = 0, _maxAngle: number = 2 * Math.PI): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = calculateRandom(_minAngle, _maxAngle);

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
}