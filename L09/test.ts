namespace L09_test{
    class Vector {
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
    }
    let v1: Vector = new Vector(10, -3);
    v1.scale(2);
    console.log(v1);
    
        


}