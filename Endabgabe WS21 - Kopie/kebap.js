"use strict";
/*
Aufgabe: Endabagbe Döner Trainer
Name: Carianne Sauermann
Matrikel: 263141
Datum: 15.02.22
*/
var KebapHouse;
(function (KebapHouse) {
    window.addEventListener("DOMContentLoaded", hndLoad);
    let startDiv;
    let canvas;
    let start;
    KebapHouse.customers = [];
    KebapHouse.staff = [];
    let containers = [];
    let storage = [];
    KebapHouse.soldOrders = 0;
    let imgData;
    let orderInProgress = [];
    function hndLoad() {
        let range = document.getElementById("slider");
        range.addEventListener("mouseup", hndRange);
        start = document.querySelector("#startButton");
        start.addEventListener("click", hndStart);
    }
    function hndRange() {
        let note = document.getElementById("slider");
        let box = document.getElementById("range");
        box.innerHTML = parseInt(note.value) + "L";
    }
    function hndStart(_event) {
        // Get variables from start screen
        let customerNumberElement = document.getElementById("customernumber");
        KebapHouse.customerNumber = parseInt(customerNumberElement.value);
        let breakFrequencyElement = document.getElementById("frequency");
        KebapHouse.breakFrequency = parseInt(breakFrequencyElement.value);
        let maxContainerVolumeElement = document.getElementById("slider");
        KebapHouse.maxContainerVolume = parseInt(maxContainerVolumeElement.value);
        let staffNumberElement = document.getElementById("numberOfStaff");
        KebapHouse.staffNumber = parseInt(staffNumberElement.value);
        startDiv = document.querySelector("#overlay");
        startDiv.innerHTML = "";
        startDiv.classList.remove("overlayStyle");
        startDiv.classList.add("content");
        hndLayout();
    }
    function hndLayout() {
        let headline = document.createElement("p");
        headline.innerHTML = "Kebap House";
        startDiv.appendChild(headline);
        canvas = document.createElement("canvas");
        canvas.width = 874;
        canvas.height = 700;
        KebapHouse.crc2 = canvas.getContext("2d");
        startDiv.appendChild(canvas);
        imgData = KebapHouse.crc2.getImageData(0, 0, KebapHouse.crc2.canvas.width, KebapHouse.crc2.canvas.height);
        initializeContainers();
        initializeStorage();
        createStaffWindow();
        createIngredientWindow();
        createCurrentOrderWindow();
        startGame();
    }
    // Creates staff management panel
    function createStaffWindow() {
        let staffWindow = document.createElement("div");
        staffWindow.classList.add("staffWindow");
        let statisticDiv = document.createElement("div");
        statisticDiv.id = "statisticDiv";
        let moodStaffText = document.createElement("p");
        moodStaffText.id = "moodStaff";
        let moodCustomerText = document.createElement("p");
        moodCustomerText.id = "moodCustomer";
        let soldOrdersText = document.createElement("p");
        soldOrdersText.innerHTML = "Sold Orders: " + KebapHouse.soldOrders;
        soldOrdersText.id = "soldOrders";
        statisticDiv.appendChild(soldOrdersText);
        statisticDiv.appendChild(moodStaffText);
        statisticDiv.appendChild(moodCustomerText);
        staffWindow.appendChild(statisticDiv);
        for (let i = 0; i < KebapHouse.staffNumber; i++) {
            let staffDiv = document.createElement("div");
            let staffName = document.createElement("p");
            staffName.innerHTML = "Staff " + (i + 1);
            let counterBtn = document.createElement("button");
            let cuttingBtn = document.createElement("button");
            let storageBtn = document.createElement("button");
            let breakBtn = document.createElement("button");
            counterBtn.innerHTML = "Counter";
            cuttingBtn.innerHTML = "Cutting Board";
            storageBtn.innerHTML = "Storage";
            breakBtn.innerHTML = "Break";
            counterBtn.addEventListener("click", function () {
                KebapHouse.staff[i].state = KebapHouse.STAFF_SITUATION.COUNTER;
                KebapHouse.staff[i].move(0.15);
            });
            cuttingBtn.addEventListener("click", function () {
                KebapHouse.staff[i].state = KebapHouse.STAFF_SITUATION.CUTTING;
                KebapHouse.staff[i].move(0.15);
            });
            storageBtn.addEventListener("click", function () {
                KebapHouse.staff[i].state = KebapHouse.STAFF_SITUATION.STORAGE;
                KebapHouse.staff[i].move(0.15);
            });
            breakBtn.addEventListener("click", function () {
                KebapHouse.staff[i].state = KebapHouse.STAFF_SITUATION.BREAK;
                KebapHouse.staff[i].move(0.15);
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
    function createIngredientWindow() {
        let ingredientWindow = document.createElement("div");
        ingredientWindow.classList.add("ingredientWindow");
        let header = document.createElement("div");
        header.innerHTML = "Storage";
        ingredientWindow.appendChild(header);
        for (let i = 0; i < 9; i++) {
            let ingredientDiv = document.createElement("div");
            ingredientDiv.id = "ingredientWindow" + containers[i].containerID;
            let ingredientName = document.createElement("p");
            let ingredient = new KebapHouse.Ingredient;
            ingredientName.innerHTML = ingredient.getIngredient(containers[i].content);
            let refillButton = document.createElement("button");
            refillButton.innerHTML = "Refill";
            // Eventlistener: Refilling the containers
            refillButton.addEventListener("click", function () {
                for (let staffMember of KebapHouse.staff) {
                    if (staffMember.state == KebapHouse.STAFF_SITUATION.CUTTING) {
                        refillButton.innerHTML = "Refilling";
                        refillButton.disabled = true;
                        setTimeout(function () {
                            let difference = KebapHouse.maxContainerVolume - containers[i].volume;
                            containers[i].refillContainer();
                            storage[i].volume = storage[i].volume - difference;
                            refillButton.innerHTML = "Refill";
                            refillButton.disabled = false;
                        }, 5000);
                    }
                }
            });
            let orderButton = document.createElement("button");
            orderButton.innerHTML = "Order";
            // Eventlistener: Ordering new ingredients
            orderButton.addEventListener("click", function () {
                for (let staffMember of KebapHouse.staff) {
                    if (staffMember.state == KebapHouse.STAFF_SITUATION.STORAGE) {
                        orderButton.innerHTML = "Ordering";
                        orderButton.disabled = true;
                        setTimeout(function () {
                            storage[i].volume = 20;
                            orderButton.innerHTML = "Order";
                            orderButton.disabled = false;
                        }, 15000);
                    }
                }
            });
            let percentage = document.createElement("p");
            percentage.id = "percentageIngredient" + i;
            percentage.innerHTML = "" + (containers[i].volume / KebapHouse.maxContainerVolume) * 100 + "%";
            ingredientDiv.appendChild(ingredientName);
            ingredientDiv.appendChild(percentage);
            ingredientDiv.appendChild(refillButton);
            ingredientDiv.appendChild(orderButton);
            ingredientWindow.appendChild(ingredientDiv);
        }
        document.getElementById("overlay")?.appendChild(ingredientWindow);
    }
    // Creates panel that displays current order
    function createCurrentOrderWindow() {
        let order = document.createElement("p");
        order.id = "currentOrder";
        order.innerHTML = "Current Order: ";
        let finishOrder = document.createElement("button");
        finishOrder.innerHTML = "Finish order";
        finishOrder.id = "finishOrderButton";
        finishOrder.addEventListener("click", function () {
            KebapHouse.customers[0].receiveOrder(orderInProgress);
            order.innerHTML = "Current Order: ";
        });
        document.getElementById("overlay")?.appendChild(order);
        document.getElementById("overlay")?.appendChild(finishOrder);
    }
    // Function that periodically creates new customers
    function generateCustomers() {
        KebapHouse.customers.push(new KebapHouse.Customer(new KebapHouse.Vector(285, 850)));
        setInterval(function () {
            KebapHouse.customers.push(new KebapHouse.Customer(new KebapHouse.Vector(285, 850)));
        }, 60000 / KebapHouse.customerNumber);
    }
    function startGame() {
        generateStaff();
        generateCustomers();
        update();
    }
    // Function that is called every frame
    function update() {
        KebapHouse.crc2.putImageData(imgData, 0, 0);
        for (let person of KebapHouse.customers) {
            person.draw();
            person.move(0.25);
        }
        for (let staffMember of KebapHouse.staff) {
            // Reset mood of staff member when on break
            if (staffMember.state == KebapHouse.STAFF_SITUATION.BREAK) {
                setTimeout(function () {
                    staffMember.mood = 0;
                }, 5000);
            }
            staffMember.draw();
            staffMember.move(0.05);
        }
        // Updates amount of ingredients in container
        for (let container of containers) {
            let percentage = document.getElementById("containerPercentage" + container.containerID);
            percentage.value = container.volume;
        }
        // Updates amount of ingredients in storage
        for (let storageUnit of storage) {
            let percentage = document.getElementById("percentageIngredient" + storageUnit.storageID);
            percentage.innerHTML = storageUnit.calcPercentage();
        }
        // Updates current order panel
        let currentOrder = document.getElementById("currentOrder");
        if (KebapHouse.customers[0] == undefined) {
            console.log("undefined");
            currentOrder.innerHTML = "Current Order: ";
        }
        else if (KebapHouse.customers[0].state == KebapHouse.CUSTOMER_SITUATION.LEAVING) {
            console.log("leaving");
            currentOrder.innerHTML = "Current Order: ";
        }
        else {
            console.log("get order");
            currentOrder.innerHTML = "Current Order: " + KebapHouse.customers[0].order.nameOfOrder;
        }
        // Updates sold orders
        let soldOrdersParagraph = document.getElementById("soldOrders");
        soldOrdersParagraph.innerHTML = "Sold Orders: " + KebapHouse.soldOrders;
        // Updates mood of staff and customers
        refreshMood();
        window.requestAnimationFrame(update);
    }
    // Function that generates staff members
    function generateStaff() {
        for (let i = 0; i < KebapHouse.staffNumber; i++) {
            KebapHouse.staff.push(new KebapHouse.Staff(new KebapHouse.Vector(650, 350)));
        }
        // Manages the demand for breaks from staff members
        for (let staffMember of KebapHouse.staff) {
            setInterval(function () {
                staffMember.mood++;
            }, (6000 * 8) / KebapHouse.breakFrequency); // 60 seconds equal 1 hour - breakfrequency for one day of work (8 hours)
        }
    }
    // Function that manages the mood of customers and staff
    function refreshMood() {
        // Add up mood values of every staff and devide by staff amount
        let moodStaff = 0;
        for (let staffMember of KebapHouse.staff) {
            moodStaff = moodStaff + staffMember.mood;
        }
        moodStaff = moodStaff / KebapHouse.staffNumber;
        let moodStaffText = document.getElementById("moodStaff");
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
        let moodCustomer = 0;
        for (let customer of KebapHouse.customers) {
            moodCustomer = moodCustomer + customer.mood;
        }
        moodCustomer = moodCustomer / KebapHouse.customers.length;
        let moodCustomerText = document.getElementById("moodCustomer");
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
    function initializeStorage() {
        storage.push(new KebapHouse.Storage(0, KebapHouse.INGREDIENT.MEAT));
        storage.push(new KebapHouse.Storage(1, KebapHouse.INGREDIENT.TOMATO));
        storage.push(new KebapHouse.Storage(2, KebapHouse.INGREDIENT.SALAD));
        storage.push(new KebapHouse.Storage(3, KebapHouse.INGREDIENT.ONION));
        storage.push(new KebapHouse.Storage(4, KebapHouse.INGREDIENT.CABBAGE));
        storage.push(new KebapHouse.Storage(5, KebapHouse.INGREDIENT.KEBAB));
        storage.push(new KebapHouse.Storage(6, KebapHouse.INGREDIENT.YUFKA));
        storage.push(new KebapHouse.Storage(7, KebapHouse.INGREDIENT.LAHMACUN));
        storage.push(new KebapHouse.Storage(8, KebapHouse.INGREDIENT.SPICY));
    }
    // Function that initializes the containers
    function initializeContainers() {
        containers.push(new KebapHouse.Container(0, KebapHouse.INGREDIENT.MEAT));
        containers.push(new KebapHouse.Container(1, KebapHouse.INGREDIENT.TOMATO));
        containers.push(new KebapHouse.Container(2, KebapHouse.INGREDIENT.SALAD));
        containers.push(new KebapHouse.Container(3, KebapHouse.INGREDIENT.ONION));
        containers.push(new KebapHouse.Container(4, KebapHouse.INGREDIENT.CABBAGE));
        containers.push(new KebapHouse.Container(5, KebapHouse.INGREDIENT.KEBAB));
        containers.push(new KebapHouse.Container(6, KebapHouse.INGREDIENT.YUFKA));
        containers.push(new KebapHouse.Container(7, KebapHouse.INGREDIENT.LAHMACUN));
        containers.push(new KebapHouse.Container(8, KebapHouse.INGREDIENT.SPICY));
        // Generate progress bars
        let percentageDiv = document.createElement("div");
        for (let i = 0; i < containers.length; i++) {
            let surroundingDiv = document.createElement("div");
            let percentageElement = document.createElement("progress");
            percentageElement.id = "containerPercentage" + i;
            percentageElement.max = KebapHouse.maxContainerVolume;
            percentageElement.value = KebapHouse.maxContainerVolume;
            percentageElement.title = new KebapHouse.Ingredient().getIngredient(containers[i].content);
            // Eventlistener: When clicked, add ingredient to order, subtract from container
            percentageElement.addEventListener("click", function () {
                for (let staffMember of KebapHouse.staff) {
                    if (staffMember.state == KebapHouse.STAFF_SITUATION.COUNTER) {
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
        for (let k = 0; k < containers.length; k++) {
            let percentageElement = document.getElementById("containerPercentage" + k);
            percentageElement.style.left = 545 + (46 * k) + "px";
        }
    }
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=kebap.js.map