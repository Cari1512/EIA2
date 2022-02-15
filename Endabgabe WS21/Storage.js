"use strict";
var KebapHouse;
(function (KebapHouse) {
    class Storage {
        constructor(_id, _ingredient) {
            this.storageID = _id;
            this.content = _ingredient;
            this.volume = 20;
        }
        // Calculates the percentage of amount left in storage
        calcPercentage() {
            return Math.floor((this.volume / 20) * 100) + "%";
        }
    }
    KebapHouse.Storage = Storage;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Storage.js.map