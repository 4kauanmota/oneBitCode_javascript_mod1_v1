class Spaceship {
    static get decelerationTax(){
        return(0.17);
    };
    
    constructor(spaceshipName, spaceshipCrewQuantity){
        this.spaceshipName = spaceshipName,
        this.spaceshipCrewQuantity = spaceshipCrewQuantity,
        this.velocity = 0
    };

    set speedUp(newVelocity){
        this.velocity += newVelocity * (1 - Spaceship.decelerationTax);
    };
};