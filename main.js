//問１
let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven() {
    let num;

    for (let index = 0; index < numbers.length; index++) {
        num = numbers[index];
        if(num % 2 === 0){
            console.log(num + 'は偶数です');
        }
    }
    
}

isEven();

//問２
class Car {
    constructor(gas, num) {
        this.gas = gas;
        this.num = num;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です`)
    }   
}

let gasnum = new Car('ハイオク', 173)
gasnum.getNumGas();