class Human{
    constructor(name, age){
        this.name = name,
        this.age = age
    };

    ageIncrease(valueToIncrease){
        console.log(this.age + valueToIncrease);
    };
};

let Kauan = new Human('Kauan', 18);

Kauan.ageIncrease(4);

console.log(Kauan);