class Spaceship{
    constructor(shipNameF, shipCrewQuantityF){
        this.shipName = shipNameF,
        this.shipCrewQuantity = shipCrewQuantityF
        this.isHitched = false,
        this.entraceDoorsOpen = false
    };

    hitch(){
        this.isHitched = true,
        this.entraceDoorsOpen = true
    };
}

function spaceshipRegister(){
    let shipName = prompt('Enter the name of the spaceship');
    let shipCrewQuantity = Number(prompt('Enter the crew quantity of the spaceship'));

    let newSpaceship = new Spaceship(shipName, shipCrewQuantity);
    return(newSpaceship);
};

function spaceshipsPrint(spaceshipsSafeF){
    let spaceshipsList = ''
    spaceshipsSafeF.forEach((element, index) =>{
        spaceshipsList += (`${index+1}. Name: ${element.shipName} | Crew quantity: ${element.shipCrewQuantity} \n`);
    });

    alert(spaceshipsList);
}

function selectedOption(){
    let choose;
    while(choose != 1 && choose !=2 && choose !=3){
        choose = Number(prompt('Enter your choice: \n\n1. Perform the hookup \n2. Print the spaceships list \n3. Exit to the program'));
    };
    return(choose)
}

function menuApplication(){
    let spaceshipsSafe = [];
    let choose;

    while(choose != 3){
        choose = selectedOption();

        switch(choose){
            case 1:
                let newSpaceship = spaceshipRegister()
                newSpaceship.hitch();
                spaceshipsSafe.push(newSpaceship);
                break;
            case 2:
                spaceshipsPrint(spaceshipsSafe);
                break;
        };
    };
};

menuApplication();