namespace KebapHouse {

  export class Customer extends Human {
    constructor(_position: Vector) {
      super(_position);
    }

    public draw(): void {
      crc2.save();
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y, 30, 0, 360);
      console.log(this.position.x, this.position.y);
      crc2.stroke();
      crc2.fill();
      crc2.restore();
    }
  }

}