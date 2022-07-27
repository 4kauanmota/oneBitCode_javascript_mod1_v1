let spaceShip = {
    pilotName: 'Kauan',
    age: 18,
    message: function() {
        console.log('Test message 1');
        console.log('Test message 2');
        console.log(this.pilotName)
    },
    f: {
        f1: 4,
        f2: 8
    }
};

spaceShip.message();
console.log(spaceShip.f.f1);
console.log(spaceShip['f']['f2']);

spaceShip.velocity = 0;

console.log(spaceShip)

spaceShip.speedUp = (aceleration) =>{
    this.velocity += aceleration;
}   

spaceShip.speedUp(48);

console.log(spaceShip);