namespace KebapHouse {

  export enum CUSTOMER_SITUATION {
    QUEUE,
    WAITING,
    LEAVING
  }

  export enum CUSTOMER_MOOD {
    HAPPY,
    WELL,
    ANNOYED,
    FURIOUS
  }

  export class Customer extends Human {
    public state: CUSTOMER_SITUATION = CUSTOMER_SITUATION.QUEUE;
    public order: Order;
    public mood: CUSTOMER_MOOD = CUSTOMER_MOOD.HAPPY;
    public currentlyWaiting: boolean = false;
    constructor(_position: Vector) {
      super(_position);
      this.velocity.set(150, 0);
      this.order = this.generateOrder();
    }

    public draw(): void {
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
      crc2.strokeStyle = "#FFC074";
      crc2.lineWidth = 3;
      crc2.stroke();
      crc2.restore();
    }

    // Moves the customer according to current situation
    public move(_timeslice: number): void {
      switch (this.state) {
        case CUSTOMER_SITUATION.QUEUE: // Customer is in queue, but hasn't ordered yet
          let nextCustomer: Customer = customers[customers.indexOf(this) - 1];
          if (nextCustomer != undefined) { // When this customer isn't at the front of the line
            if ((new Vector((nextCustomer.position.x - this.position.x), (nextCustomer.position.y - this.position.y)).length < 100)) {
              this.velocity.set(0, 0);
              break;
            }
          }
          if (this.position.y < 300) { // Stops customer in front of counter
            this.velocity.set(0, 0);
            this.state = CUSTOMER_SITUATION.WAITING;
            this.waiting();
            break;
          }
          else {
            this.velocity.set(0, -10);
          }
          break;

        case CUSTOMER_SITUATION.LEAVING:
          this.velocity.set(-10, 0);
          break;
      }
      super.move(_timeslice);
    }

    // Worsens the mood of the customer when waiting too long
    public waiting(): void {
      if (this.currentlyWaiting == false) {
        this.currentlyWaiting = true;
        let customer: Customer = this;
        setTimeout(function (): void {
          if (customer.state == CUSTOMER_SITUATION.WAITING || CUSTOMER_SITUATION.QUEUE) {
            customer.mood = customer.mood + 1;
            customer.currentlyWaiting = false;
            if (customer.mood == CUSTOMER_MOOD.FURIOUS) { // Customer leaves after not getting food in time
              customer.state = CUSTOMER_SITUATION.LEAVING;
              setTimeout(function (): void {
                customer.removeFromCustomers();
              },         3000);

            }
            customer.waiting();
          }
        },         15000);
      }
    }

    // Generates a random order for the customer
    public generateOrder(): Order {
      let allOrders: Order[] = [
        new Order("Döner", [INGREDIENT.KEBAB, INGREDIENT.MEAT, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE]),
        new Order("Döner ohne Zwiebeln", [INGREDIENT.KEBAB, INGREDIENT.MEAT, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.CABBAGE]),
        new Order("Döner mit scharf", [INGREDIENT.KEBAB, INGREDIENT.MEAT, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE, INGREDIENT.SPICY]),
        new Order("Yufka", [INGREDIENT.YUFKA, INGREDIENT.MEAT, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE]),
        new Order("Yufka mit scharf", [INGREDIENT.KEBAB, INGREDIENT.MEAT, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE, INGREDIENT.SPICY]),
        new Order("Lahmacun", [INGREDIENT.LAHMACUN, INGREDIENT.MEAT, INGREDIENT.SALAD, INGREDIENT.TOMATO, INGREDIENT.ONION, INGREDIENT.CABBAGE])
      ];

      let randomNumber: number = Math.round(Math.random() * allOrders.length);
      return allOrders[randomNumber];
    }

    // Receives order, validates it and leaves the store
    public receiveOrder(_order: INGREDIENT[]): void {
      this.validateOrder(this.order, _order);
      if (this.validateOrder(this.order, _order) == true) {
        this.mood = CUSTOMER_MOOD.HAPPY;
      }
      this.state = CUSTOMER_SITUATION.LEAVING;
      setTimeout(function (): void {
        customers.splice(0, 1);
      },         2500);

    }

    // Checks order if it contains the correct ingredients
    public validateOrder(_givenOrder: Order, _preparedOrder: INGREDIENT[]): boolean {
      _preparedOrder = _preparedOrder.sort((n1, n2) => n1 - n2); // Sorts both orders
      _givenOrder.ingredients = _givenOrder.ingredients.sort((n1, n2) => n1 - n2);

      soldOrders++;
      for (let i: number = 0; i < _givenOrder.ingredients.length; i++) { // Checks if ingredients match
        if (_givenOrder.ingredients[i] != _preparedOrder[i]) {
          return false;
        }
      }
      return true;
    }

    // Removes customer from array
    public removeFromCustomers(): void {
      customers.splice(0, 1);
    }
  }

}