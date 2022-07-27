class Person {
    constructor(name, age, work){
        this.name = name,
        this.age = age,
        this.work = work
    };
};

class Client extends Person{
    buy(){
        console.log('You bought');
    };
};

let client1 = new Client('Kauan', 18, 'Programmer');

console.log(client1);
client1.buy();