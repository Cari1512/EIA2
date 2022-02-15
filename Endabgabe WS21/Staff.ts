namespace KebapHouse {

  export enum STAFF_SITUATION {
    COUNTER,
    CUTTING,
    STORAGE,
    BREAK
  }

  export enum STAFF_MOOD {
    RESTED,
    WELL,
    STRESSED,
    EXHAUSTED
  }

  export class Staff extends Human {

    public state: STAFF_SITUATION = STAFF_SITUATION.BREAK;
    public mood: STAFF_MOOD = STAFF_MOOD.RESTED;
    public locationCounter: Vector = new Vector(285, 142);
    public locationCutting: Vector = new Vector(120, 115);
    public locationStorage: Vector = new Vector(775, 100);
    public locationBreak: Vector = new Vector(650, 350);
    public locationCentralPoint: Vector = new Vector(650, 150);

    constructor(_position: Vector) {
      super(_position);
      this.velocity.set(0, 0);
    }

    public draw(): void {
      crc2.beginPath();
      crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
      //console.log(this.position.x, this.position.y);
      crc2.strokeStyle = "#DFF3E3";
      crc2.lineWidth = 3;
      crc2.stroke();
      crc2.restore();
    }

    // Function that checks location of staff member and manages movement
    public move(_timeslice: number): void {
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
    public moveTo(_timeslice: number, _startpoint: Vector, _destination: STAFF_SITUATION): void {
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

}