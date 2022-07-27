class Spaceship{
    constructor(spaceshipName, spaceshipCrewQuantity, pilotName, pilotAge, pilotExperienceTime){
        this.spaceshipName = spaceshipName,
        this.spaceshipCrewQuantity = spaceshipCrewQuantity,
        this.pilot = new Pilot(pilotName, pilotAge, pilotExperienceTime)
    }
}

class Pilot{
    constructor(pilotName, pilotAge, pilotExperienceTime){
        this.pilotName = pilotName,
        this.pilotAge = pilotAge,
        this.pilotExperienceTime = pilotExperienceTime
    };
};

let test = new Spaceship('4thend', 48, 'Kauan', 18, '1500h');

console.log(test);