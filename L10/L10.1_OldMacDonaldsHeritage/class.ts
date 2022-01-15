namespace Heritage {

    export class Animal {
        animal: string;
        name: string;
        sound: string;
        foodType: string;
        dailyAmount: number;
        totalFood: number;

        constructor(_animal: string, _name: string, _sound: string, _foodType: string, _dailyAmount: number, _totalFood: number) {
            this.animal = _animal;
            this.name = _name;
            this.sound = _sound;
            this.foodType = _foodType;
            this.dailyAmount = _dailyAmount;
            this.totalFood = _totalFood;
        }

        food() {
            return `${this.foodType} : ${this.totalFood} Kg<br>  `;
        }

        sing() {
            return `${this.name}<br><br>
                Old MACDONALD had a farm <br>
                E-I-E-I-O <br> 
                And on his farm he had a ${this.animal} named ${this.name} <br>
                E-I-E-I-O <br>
                With a ${this.sound} ${this.sound} here <br>
                A ${this.sound} ${this.sound} there <br>
                Here a ${this.sound}, there a ${this.sound} <br>
                it eats ${this.dailyAmount} Kg of ${this.foodType}.<br>
                Old MacDonald had a farm <br>
                E-I-E-I-O <br><br>`;
        }

    }
}