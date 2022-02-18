/*
Aufgabe: Endabagbe Döner Trainer
Name: Carianne Sauermann
Matrikel: 263141
Datum: 15.02.22
Unterstützung: Alexander Reiprich MIB
*/

namespace KebapHouse {

  window.addEventListener("DOMContentLoaded", hndLoad);
  let startDiv: HTMLDivElement;
  export let crc2: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;

  let start: HTMLButtonElement;
  export let customers: Customer[] = [];
  export let staff: Staff[] = [];
  let containers: Container[] = [];
  let storage: Storage[] = [];

  export let staffNumber: number;
  export let customerNumber: number;
  export let breakFrequency: number;
  export let maxContainerVolume: number;
  export let soldOrders: number = 0;

  let imgData: ImageData;
  let orderInProgress: INGREDIENT[] = [];


  function hndLoad(): void {
    let range: HTMLInputElement = <HTMLInputElement>document.getElementById("slider");
    range.addEventListener("mouseup", hndRange);
    start = <HTMLButtonElement>document.querySelector("#startButton");
    start.addEventListener("click", hndStart);
  }
  function hndRange(): void {
    let note: HTMLInputElement = <HTMLInputElement>document.getElementById("slider");
    let box: HTMLElement = <HTMLElement>document.getElementById("range");
    box!.innerHTML = parseInt(note.value) + "L";
  }

  function hndStart(_event: Event): void {
    // Get variables from start screen
    let customerNumberElement: HTMLInputElement = <HTMLInputElement>document.getElementById("customernumber");
    customerNumber = parseInt(customerNumberElement.value);
    let breakFrequencyElement: HTMLInputElement = <HTMLInputElement>document.getElementById("frequency");
    breakFrequency = parseInt(breakFrequencyElement.value);
    let maxContainerVolumeElement: HTMLInputElement = <HTMLInputElement>document.getElementById("slider");
    maxContainerVolume = parseInt(maxContainerVolumeElement.value);
    let staffNumberElement: HTMLInputElement = <HTMLInputElement>document.getElementById("numberOfStaff");
    staffNumber = parseInt(staffNumberElement.value);

    startDiv = <HTMLDivElement>document.querySelector("#overlay");
    startDiv.innerHTML = "";
    startDiv.classList.remove("overlayStyle");
    startDiv.classList.add("content");
    hndLayout();

  }

  function hndLayout(): void {
    let headline: HTMLParagraphElement = document.createElement("p");
    headline.innerHTML = "Kebap House";
    startDiv.appendChild(headline);

    canvas = document.createElement("canvas");
    canvas.width = 874;
    canvas.height = 700;
    crc2 = canvas.getContext("2d")!;
    startDiv.appendChild(canvas);

    imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    initializeContainers();
    initializeStorage();
    createStaffWindow();
    createIngredientWindow();
    createCurrentOrderWindow();

    startGame();

  }

  // Creates staff management panel
  function createStaffWindow(): void {
    let staffWindow: HTMLDivElement = document.createElement("div");
    staffWindow.classList.add("staffWindow");

    let statisticDiv: HTMLDivElement = document.createElement("div");
    statisticDiv.id = "statisticDiv";

    let moodStaffText: HTMLParagraphElement = document.createElement("p");
    moodStaffText.id = "moodStaff";
    let moodCustomerText: HTMLParagraphElement = document.createElement("p");
    moodCustomerText.id = "moodCustomer";

    let soldOrdersText: HTMLParagraphElement = document.createElement("p");
    soldOrdersText.innerHTML = "Sold Orders: " + soldOrders;
    soldOrdersText.id = "soldOrders";

    statisticDiv.appendChild(soldOrdersText);
    statisticDiv.appendChild(moodStaffText);
    statisticDiv.appendChild(moodCustomerText);
    staffWindow.appendChild(statisticDiv);

    for (let i: number = 0; i < staffNumber; i++) {
      let staffDiv: HTMLDivElement = document.createElement("div");
      let staffName: HTMLParagraphElement = document.createElement("p");
      staffName.innerHTML = "Staff " + (i + 1);

      let counterBtn: HTMLButtonElement = document.createElement("button");
      let cuttingBtn: HTMLButtonElement = document.createElement("button");
      let storageBtn: HTMLButtonElement = document.createElement("button");
      let breakBtn: HTMLButtonElement = document.createElement("button");

      counterBtn.innerHTML = "Counter";
      cuttingBtn.innerHTML = "Cutting Board";
      storageBtn.innerHTML = "Storage";
      breakBtn.innerHTML = "Break";

      counterBtn.addEventListener("click", function (): void {
        staff[i].state = STAFF_SITUATION.COUNTER;
        staff[i].move(0.15);
      });
      cuttingBtn.addEventListener("click", function (): void {
        staff[i].state = STAFF_SITUATION.CUTTING;
        staff[i].move(0.15);
      });
      storageBtn.addEventListener("click", function (): void {
        staff[i].state = STAFF_SITUATION.STORAGE;
        staff[i].move(0.15);
      });
      breakBtn.addEventListener("click", function (): void {
        staff[i].state = STAFF_SITUATION.BREAK;
        staff[i].move(0.15);
      });

      staffDiv.appendChild(staffName);
      staffDiv.appendChild(counterBtn);
      staffDiv.appendChild(cuttingBtn);
      staffDiv.appendChild(storageBtn);
      staffDiv.appendChild(breakBtn);
      staffWindow.appendChild(staffDiv);
    }
    document.getElementById("overlay")?.appendChild(staffWindow);
  }

  // Creates ingredient management panel
  function createIngredientWindow(): void {
    let ingredientWindow: HTMLDivElement = document.createElement("div");
    ingredientWindow.classList.add("ingredientWindow");

    let header: HTMLParagraphElement = document.createElement("div");
    header.innerHTML = "Storage";
    ingredientWindow.appendChild(header);

    for (let i: number = 0; i < 9; i++) {
      let ingredientDiv: HTMLDivElement = document.createElement("div");
      ingredientDiv.id = "ingredientWindow" + containers[i].containerID;
      let ingredientName: HTMLParagraphElement = document.createElement("p");
      let ingredient: Ingredient = new Ingredient;
      ingredientName.innerHTML = ingredient.getIngredient(containers[i].content);

      let refillButton: HTMLButtonElement = document.createElement("button");
      refillButton.innerHTML = "Refill";

      // Eventlistener: Refilling the containers
      refillButton.addEventListener("click", function (): void {
        for (let staffMember of staff) {
          if (staffMember.state == STAFF_SITUATION.CUTTING) {
            refillButton.innerHTML = "Refilling";
            refillButton.disabled = true;
            setTimeout(function (): void {
              let difference: number = maxContainerVolume - containers[i].volume;
              containers[i].refillContainer();
              storage[i].volume = storage[i].volume - difference;
              refillButton.innerHTML = "Refill";
              refillButton.disabled = false;
            },         5000);

          }
        }
      });

      let orderButton: HTMLButtonElement = document.createElement("button");
      orderButton.innerHTML = "Order";
      // Eventlistener: Ordering new ingredients
      orderButton.addEventListener("click", function (): void {
        for (let staffMember of staff) {
          if (staffMember.state == STAFF_SITUATION.STORAGE) {
            orderButton.innerHTML = "Ordering";
            orderButton.disabled = true;
            setTimeout(function (): void {
              storage[i].volume = 20;
              orderButton.innerHTML = "Order";
              orderButton.disabled = false;
            },         15000);
          }
        }
      });

      let percentage: HTMLParagraphElement = document.createElement("p");
      percentage.id = "percentageIngredient" + i;
      percentage.innerHTML = "" + (containers[i].volume / maxContainerVolume) * 100 + "%";

      ingredientDiv.appendChild(ingredientName);
      ingredientDiv.appendChild(percentage);
      ingredientDiv.appendChild(refillButton);
      ingredientDiv.appendChild(orderButton);
      ingredientWindow.appendChild(ingredientDiv);
    }
    document.getElementById("overlay")?.appendChild(ingredientWindow);
  }

  // Creates panel that displays current order
  function createCurrentOrderWindow(): void {
    let order: HTMLParagraphElement = document.createElement("p");
    order.id = "currentOrder";
    order.innerHTML = "Current Order: ";

    let finishOrder: HTMLButtonElement = document.createElement("button");
    finishOrder.innerHTML = "Finish order";
    finishOrder.id = "finishOrderButton";
    finishOrder.addEventListener("click", function (): void {
      customers[0].receiveOrder(orderInProgress);
      order.innerHTML = "Current Order: ";
    });

   
    document.getElementById("overlay")?.appendChild(order);
    document.getElementById("overlay")?.appendChild(finishOrder);
  }

  // Function that periodically creates new customers
  function generateCustomers(): void {
    customers.push(new Customer(new Vector(285, 850)));
    setInterval(function (): void {
      customers.push(new Customer(new Vector(285, 850)));
    },          60000 / customerNumber);
  }

  function startGame(): void {
    generateStaff();
    generateCustomers();
    update();
  }

  // Function that is called every frame
  function update(): void {
    crc2.putImageData(imgData, 0, 0);
    for (let person of customers) {
      person.draw();
      person.move(0.25);
    }
    for (let staffMember of staff) {
      // Reset mood of staff member when on break
      if (staffMember.state == STAFF_SITUATION.BREAK) {
        setTimeout(function(): void {
          staffMember.mood = 0;
        },         5000);
        
      }
      staffMember.draw();
      staffMember.move(0.05);
    }

    // Updates amount of ingredients in container
    for (let container of containers) {
      let percentage: HTMLProgressElement = <HTMLProgressElement>document.getElementById("containerPercentage" + container.containerID);
      percentage.value = container.volume;
    }

    // Updates amount of ingredients in storage
    for (let storageUnit of storage) {
      let percentage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("percentageIngredient" + storageUnit.storageID);
      percentage.innerHTML = storageUnit.calcPercentage();
    }

    // Updates current order panel
    let currentOrder: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("currentOrder");
    if (customers[0] == undefined) {
      console.log("undefined");
      currentOrder.innerHTML = "Current Order: ";
    }
    else if (customers[0].state == CUSTOMER_SITUATION.LEAVING) {
      console.log("leaving");
      currentOrder.innerHTML = "Current Order: ";
    }
    else {
      console.log("get order");
      currentOrder.innerHTML = "Current Order: " + customers[0].order.nameOfOrder;
    }

    // Updates sold orders
    let soldOrdersParagraph: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("soldOrders");
    soldOrdersParagraph.innerHTML = "Sold Orders: " + soldOrders;

    // Updates mood of staff and customers
    refreshMood();

    window.requestAnimationFrame(update);
  }

  // Function that generates staff members
  function generateStaff(): void {
    for (let i: number = 0; i < staffNumber; i++) {
      staff.push(new Staff(new Vector(650, 350)));
    }

    // Manages the demand for breaks from staff members
    for (let staffMember of staff) {
      setInterval(function (): void {
        staffMember.mood++;

      },          (6000 * 8) / breakFrequency); // 60 seconds equal 1 hour - breakfrequency for one day of work (8 hours)
    }
  }

  // Function that manages the mood of customers and staff
  function refreshMood(): void {
    // Add up mood values of every staff and devide by staff amount
    let moodStaff: number = 0;
    for (let staffMember of staff) {
      moodStaff = moodStaff + staffMember.mood;
    }
    moodStaff = moodStaff / staffNumber;

    let moodStaffText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("moodStaff");
    switch (moodStaff) {
      case 0:
        moodStaffText.innerHTML = "Current Staff Mood: :)";
        break;
      case 1:
        moodStaffText.innerHTML = "Current Staff Mood: :I";
        break;
      case 2:
        moodStaffText.innerHTML = "Current Staff Mood: :/";
        break;
      case 3:
        moodStaffText.innerHTML = "Current Staff Mood: :(";
        break;
    }

    // Add up mood values of every customer and devide by customer amount
    let moodCustomer: number = 0;
    for (let customer of customers) {
      moodCustomer = moodCustomer + customer.mood;
    }
    moodCustomer = moodCustomer / customers.length;
    let moodCustomerText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("moodCustomer");
    switch (moodCustomer) {
      case 0:
        moodCustomerText.innerHTML = "Current Customer Mood: :)";
        break;
      case 1:
        moodCustomerText.innerHTML = "Current Customer Mood: :I";
        break;
      case 2:
        moodCustomerText.innerHTML = "Current Customer Mood: :/";
        break;
      case 3:
        moodCustomerText.innerHTML = "Current Customer Mood: :(";
        break;
    }
  }

  // Function that initializes the storage
  function initializeStorage(): void {
    storage.push(new Storage(0, INGREDIENT.MEAT));
    storage.push(new Storage(1, INGREDIENT.TOMATO));
    storage.push(new Storage(2, INGREDIENT.SALAD));
    storage.push(new Storage(3, INGREDIENT.ONION));
    storage.push(new Storage(4, INGREDIENT.CABBAGE));
    storage.push(new Storage(5, INGREDIENT.KEBAB));
    storage.push(new Storage(6, INGREDIENT.YUFKA));
    storage.push(new Storage(7, INGREDIENT.LAHMACUN));
    storage.push(new Storage(8, INGREDIENT.SPICY));
  }

  // Function that initializes the containers
  function initializeContainers(): void {
    containers.push(new Container(0, INGREDIENT.MEAT));
    containers.push(new Container(1, INGREDIENT.TOMATO));
    containers.push(new Container(2, INGREDIENT.SALAD));
    containers.push(new Container(3, INGREDIENT.ONION));
    containers.push(new Container(4, INGREDIENT.CABBAGE));
    containers.push(new Container(5, INGREDIENT.KEBAB));
    containers.push(new Container(6, INGREDIENT.YUFKA));
    containers.push(new Container(7, INGREDIENT.LAHMACUN));
    containers.push(new Container(8, INGREDIENT.SPICY));

    // Generate progress bars
    let percentageDiv: HTMLDivElement = document.createElement("div");
    for (let i: number = 0; i < containers.length; i++) {
      let surroundingDiv: HTMLDivElement = document.createElement("div");
      let percentageElement: HTMLProgressElement = document.createElement("progress");
      percentageElement.id = "containerPercentage" + i;
      percentageElement.max = maxContainerVolume;
      percentageElement.value = maxContainerVolume;
      percentageElement.title = new Ingredient().getIngredient(containers[i].content);
      
      // Eventlistener: When clicked, add ingredient to order, subtract from container
      percentageElement.addEventListener("click", function (): void {
        for (let staffMember of staff) {
          if (staffMember.state == STAFF_SITUATION.COUNTER) {
            containers[i].takeFromContainer();
            orderInProgress.push(containers[i].content);
          }
        }
      });

      surroundingDiv.appendChild(percentageElement);
      percentageDiv.appendChild(surroundingDiv);
      document.getElementById("overlay")?.appendChild(percentageDiv);
    }
    // Shift containers to location on canvas
    for (let k: number = 0; k < containers.length; k++) {
      let percentageElement: HTMLProgressElement = <HTMLProgressElement>document.getElementById("containerPercentage" + k);
      percentageElement.style.left = 545 + (46 * k) + "px";
    }

  }

}