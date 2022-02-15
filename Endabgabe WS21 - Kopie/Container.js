"use strict";
var KebapHouse;
(function (KebapHouse) {
    class Container {
        constructor(_id, _ingredient) {
            this.volume = KebapHouse.maxContainerVolume;
            this.content = _ingredient;
            this.containerID = _id;
        }
        // Takes x amount of the ingredient out of the container
        takeFromContainer() {
            if (this.volume > 0.5) {
                this.volume = this.volume - 0.5;
                let indicator = document.getElementById("containerPercentage" + this.containerID);
                indicator.value = indicator.value - 0.5;
            }
        }
        // Refills container to maximum volume
        refillContainer() {
            this.volume = KebapHouse.maxContainerVolume;
        }
    }
    KebapHouse.Container = Container;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Container.js.map