"use strict";
var KebapHouse;
(function (KebapHouse) {
    let STAFF_SITUATION;
    (function (STAFF_SITUATION) {
        STAFF_SITUATION[STAFF_SITUATION["COUNTER"] = 0] = "COUNTER";
        STAFF_SITUATION[STAFF_SITUATION["CUTTING"] = 1] = "CUTTING";
        STAFF_SITUATION[STAFF_SITUATION["STORAGE"] = 2] = "STORAGE";
        STAFF_SITUATION[STAFF_SITUATION["BREAK"] = 3] = "BREAK";
    })(STAFF_SITUATION = KebapHouse.STAFF_SITUATION || (KebapHouse.STAFF_SITUATION = {}));
    let STAFF_MOOD;
    (function (STAFF_MOOD) {
        STAFF_MOOD[STAFF_MOOD["RESTED"] = 0] = "RESTED";
        STAFF_MOOD[STAFF_MOOD["WELL"] = 1] = "WELL";
        STAFF_MOOD[STAFF_MOOD["STRESSED"] = 2] = "STRESSED";
        STAFF_MOOD[STAFF_MOOD["EXHAUSTED"] = 3] = "EXHAUSTED";
    })(STAFF_MOOD = KebapHouse.STAFF_MOOD || (KebapHouse.STAFF_MOOD = {}));
    class Staff extends KebapHouse.Human {
        constructor(_position) {
            super(_position);
            this.state = STAFF_SITUATION.BREAK;
            this.mood = STAFF_MOOD.RESTED;
            this.locationCounter = new KebapHouse.Vector(285, 142);
            this.locationCutting = new KebapHouse.Vector(120, 115);
            this.locationStorage = new KebapHouse.Vector(775, 100);
            this.locationBreak = new KebapHouse.Vector(650, 350);
            this.locationCentralPoint = new KebapHouse.Vector(650, 150);
            this.velocity.set(0, 0);
        }
        draw() {
            KebapHouse.crc2.beginPath();
            KebapHouse.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            //console.log(this.position.x, this.position.y);
            KebapHouse.crc2.strokeStyle = "#DFF3E3";
            KebapHouse.crc2.lineWidth = 3;
            KebapHouse.crc2.stroke();
            KebapHouse.crc2.restore();
        }
        // Function that checks location of staff member and manages movement
        move(_timeslice) {
            if (this.state == STAFF_SITUATION.COUNTER && this.position.compare(this.locationCounter) == false) {
                this.moveTo(0.05, this.position, STAFF_SITUATION.COUNTER);
            }
            if (this.state == STAFF_SITUATION.CUTTING && this.position.compare(this.locationCutting) == false) {
                this.moveTo((0.05), this.position, STAFF_SITUATION.CUTTING);
            }
            if (this.state == STAFF_SITUATION.STORAGE && this.position.compare(this.locationStorage) == false) {
                this.moveTo((0.05), this.position, STAFF_SITUATION.STORAGE);
            }
            if (this.state == STAFF_SITUATION.BREAK && this.position.compare(this.locationBreak) == false) {
                this.moveTo((0.05), this.position, STAFF_SITUATION.BREAK);
            }
        }
        // Function that moves staff member from startpoint to destination
        moveTo(_timeslice, _startpoint, _destination) {
            switch (_destination) {
                case STAFF_SITUATION.COUNTER:
                    if (_startpoint.y > 150) { // When in break room, go over central point to avoid travelling over walls
                        this.velocity.set(this.locationCentralPoint.x - this.position.x, this.locationCentralPoint.y - this.position.y);
                        if (Math.round(this.position.y) <= 150) {
                            this.velocity.set(this.locationCounter.x - this.position.x, this.locationCounter.y - this.position.y);
                        }
                    }
                    else if (_startpoint.x > 700) { // When in storage room, go over central point to avoid travelling over walls
                        this.velocity.set(this.locationCentralPoint.x - this.position.x, this.locationCentralPoint.y - this.position.y);
                        if (Math.round(this.position.x) <= 700) {
                            this.velocity.set(this.locationCounter.x - this.position.x, this.locationCounter.y - this.position.y);
                        }
                    }
                    else {
                        this.velocity.set(this.locationCounter.x - this.position.x, this.locationCounter.y - this.position.y);
                    }
                    break;
                case STAFF_SITUATION.CUTTING:
                    if (_startpoint.y > 150) { // When in break room, go over central point to avoid travelling over walls
                        this.velocity.set(this.locationCentralPoint.x - this.position.x, this.locationCentralPoint.y - this.position.y);
                        if (Math.round(this.position.y) <= 150) {
                            this.velocity.set(this.locationCutting.x - this.position.x, this.locationCutting.y - this.position.y);
                        }
                    }
                    else if (_startpoint.x > 700) { // When in storage room, go over central point to avoid travelling over walls
                        this.velocity.set(this.locationCentralPoint.x - this.position.x, this.locationCentralPoint.y - this.position.y);
                        if (Math.round(this.position.x) <= 700) {
                            this.velocity.set(this.locationCutting.x - this.position.x, this.locationCutting.y - this.position.y);
                        }
                    }
                    else {
                        this.velocity.set(this.locationCutting.x - this.position.x, this.locationCutting.y - this.position.y);
                    }
                    break;
                case STAFF_SITUATION.STORAGE:
                    if (_startpoint.y > 150) { // When in break room, go over central point to avoid travelling over walls
                        this.velocity.set(this.locationCentralPoint.x - this.position.x, this.locationCentralPoint.y - this.position.y);
                        if (Math.round(this.position.y) <= 150) {
                            this.velocity.set(this.locationStorage.x - this.position.x, this.locationStorage.y - this.position.y);
                        }
                    }
                    else {
                        this.velocity.set(this.locationStorage.x - this.position.x, this.locationStorage.y - this.position.y);
                    }
                    break;
                case STAFF_SITUATION.BREAK:
                    if (_startpoint.y < 150) { // When outside break room, go over central point to avoid travelling over walls
                        this.velocity.set(this.locationCentralPoint.x - this.position.x, this.locationCentralPoint.y - this.position.y);
                        if (Math.round(this.position.y) >= 150) {
                            this.velocity.set(this.locationBreak.x - this.position.x, this.locationBreak.y - this.position.y);
                        }
                    }
                    else if (_startpoint.x > 700) { // When in storage room, go over central point to avoid travelling over walls
                        this.velocity.set(this.locationCentralPoint.x - this.position.x, this.locationCentralPoint.y - this.position.y);
                        if (Math.round(this.position.x) <= 700) {
                            this.velocity.set(this.locationCutting.x - this.position.x, this.locationCutting.y - this.position.y);
                        }
                    }
                    else {
                        this.velocity.set(this.locationBreak.x - this.position.x, this.locationBreak.y - this.position.y);
                    }
                    break;
            }
            super.move(_timeslice);
        }
    }
    KebapHouse.Staff = Staff;
})(KebapHouse || (KebapHouse = {}));
//# sourceMappingURL=Staff.js.map