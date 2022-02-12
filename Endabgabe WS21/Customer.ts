namespace KebapHouse {

  enum CUSTOMER_SITUATION {
    QUEUE,
    WAITING,
    LEAVING
  }

  export class Customer extends Human {
    public state: CUSTOMER_SITUATION = CUSTOMER_SITUATION.QUEUE;
    public order: Order;
    constructor(_position: Vector) {
      super(_position);
      this.velocity.set(150, 0);
      this.order = this.generateOrder();
    }

    public draw(): void {
     
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
      //console.log(this.position.x, this.position.y);
      crc2.strokeStyle = "#FF0000";
      crc2.lineWidth = 3;
      crc2.stroke();
      crc2.restore();
    }

    public move(_timeslice: number): void {
      super.move(_timeslice);
      this.velocity.set(0, -10);
      switch (this.state) {
        case CUSTOMER_SITUATION.QUEUE:
          if (this.position == new Vector(this.position.x, 300)) {
            this.velocity.set(0, 0);
            this.state = CUSTOMER_SITUATION.WAITING;
            break;
          }
          else {
            this.velocity.set(0,-10);
          }
      }

    }

    public generateOrder(): Order {
      let allOrders: Order[] = [
        new Order("Normaler Döner", [INGREDIENT.KEBAB, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE]),
        new Order("Döner ohne Zwiebeln", [INGREDIENT.KEBAB, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.CABBAGE]),
        new Order("Döner mit scharf", [INGREDIENT.KEBAB, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE, INGREDIENT.SPICY]),
        new Order("Normaler Yufka", [INGREDIENT.YUFKA, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE]),
        new Order("Yufka mit scharf", [INGREDIENT.KEBAB, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE, INGREDIENT.SPICY]),
        new Order("Normaler Lahmacun", [INGREDIENT.LAHMACUN, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE]),
      ];

      let randomNumber: number = Math.floor(Math.random() * allOrders.length);
      console.log(allOrders[randomNumber]);
      return allOrders[randomNumber];
    }
  }

}