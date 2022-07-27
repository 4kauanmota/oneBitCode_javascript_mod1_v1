class Person {
    constructor(name, age){
        this.name = name,
        this.age = age,
        this.currentVelocity = ''
    };

    get midAge(){
        return(this.age / 2);
    };

    set velocity(newVelocity){
        if(newVelocity > 20){
            this.currentVelocity = 'running';
        }
        else{
            this.currentVelocity = 'walking';
        };
    };
};

let person1 = new Person('Kauan', 18);

person1.velocity = 8;
console.log(person1);

console.log(person1.midAge);
person1.age = 20;
console.log(person1.midAge);